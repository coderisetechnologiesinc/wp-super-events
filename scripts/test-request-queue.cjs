// Run with: npm run test:queue. No network and no PHP: the transport is a stub
// that reports how many requests were ever in flight at once.
const assert = require("node:assert/strict");
const { test } = require("node:test");
const path = require("node:path");
const babel = require("@babel/core");
const root = path.resolve(__dirname, "..");
const originalLoader = require.extensions[".js"];
const modules = new Set([
  "requestCache.js",
  "adminApi.js",
  "requestQueue.js",
  "planCapabilities.js",
]);
require.extensions[".js"] = (mod, file) => {
  if (
    file.startsWith(path.join(root, "src", "utilities")) &&
    modules.has(path.basename(file))
  ) {
    mod._compile(
      babel.transformFileSync(file, {
        babelrc: false,
        configFile: false,
        presets: [
          [
            require.resolve("@babel/preset-env"),
            { targets: { node: "current" } },
          ],
        ],
      }).code,
      file,
    );
  } else originalLoader(mod, file);
};

global.window = {
  location: {
    href: "https://site.test/wp-admin/admin.php?page=servv",
    origin: "https://site.test",
    pathname: "/wp-admin/admin.php",
    search: "?page=servv",
    hash: "",
  },
  history: { replaceState: () => {} },
  // No cache: these tests are about what travels, not what is remembered.
  servvData: { nativeAdmin: true, install_status: "failed", nonce: "n" },
  localStorage: null,
};
global.servvData = global.window.servvData;

const deferred = () => {
  let resolve;
  const promise = new Promise((r) => {
    resolve = r;
  });
  return { promise, resolve };
};

// Counts concurrency the way the PHP pool experiences it: how many requests
// are simultaneously waiting on the server.
const tracker = () => {
  const state = { active: 0, peak: 0, started: 0, gates: [] };
  state.transport = () => {
    state.active += 1;
    state.started += 1;
    state.peak = Math.max(state.peak, state.active);
    const gate = deferred();
    state.gates.push(gate);
    return gate.promise.then(() => {
      state.active -= 1;
      return { data: {}, status: 200, statusText: "OK", headers: {} };
    });
  };
  state.releaseAll = async () => {
    // Release in waves: finishing one request lets the queue admit the next,
    // which registers a new gate.
    while (state.gates.length) {
      state.gates.splice(0).forEach((gate) => gate.resolve());
      await new Promise((resolve) => setImmediate(resolve));
    }
  };
  return state;
};

const freshApi = (track) => {
  for (const key of Object.keys(require.cache)) {
    if (key.includes(path.join("src", "utilities"))) delete require.cache[key];
  }
  const axios = require("axios");
  const create = axios.create.bind(axios);
  axios.create = (...args) => {
    const instance = create(...args);
    instance.defaults.adapter = track.transport;
    return instance;
  };
  axios.getAdapter = () => track.transport;
  const api = require("../src/utilities/adminApi").default;
  axios.create = create;
  return api;
};

test("a wide fan-out never puts more requests on the server than the cap", async () => {
  const track = tracker();
  const api = freshApi(track);

  const pending = Array.from({ length: 12 }, (_, index) =>
    api.get(`/wp-json/servv-plugin/v1/thing/${index}`),
  );
  await new Promise((resolve) => setImmediate(resolve));

  assert.equal(track.peak, 3, "the default cap is three in flight");
  assert.equal(track.active, 3);

  await track.releaseAll();
  await Promise.all(pending);

  assert.equal(track.started, 12, "every request still travelled");
  assert.equal(track.peak, 3, "and none of them raised the ceiling");
});

test("the cap is the host's to lower", async () => {
  global.window.servvData.requestConcurrency = 1;
  try {
    const track = tracker();
    const api = freshApi(track);
    const pending = Array.from({ length: 4 }, (_, index) =>
      api.get(`/wp-json/servv-plugin/v1/thing/${index}`),
    );
    await new Promise((resolve) => setImmediate(resolve));
    assert.equal(track.peak, 1);
    await track.releaseAll();
    await Promise.all(pending);
    assert.equal(track.started, 4);
  } finally {
    delete global.window.servvData.requestConcurrency;
  }
});

test("a rejected request frees its slot instead of stalling the queue", async () => {
  let calls = 0;
  const api = freshApi({
    transport: () => {
      calls += 1;
      return Promise.reject(new Error("boom"));
    },
  });

  const results = await Promise.allSettled(
    Array.from({ length: 6 }, (_, index) =>
      api.get(`/wp-json/servv-plugin/v1/thing/${index}`),
    ),
  );

  // A slot held by a failed request would have stalled the queue after three.
  assert.equal(calls, 6, "all six were admitted despite every one failing");
  assert.equal(
    results.filter((result) => result.status === "rejected").length,
    6,
    "and the failures are reported, not swallowed",
  );
});

test("plan and provider decide which accounts are worth asking for", () => {
  const {
    isFreePlan,
    needsZoomAccount,
    needsStripeAccount,
    needsGmailAccount,
    needsMembersFilter,
  } = require("../src/utilities/planCapabilities");

  const free = { current_plan: { id: 1, price: 0 }, settings: {} };
  const paid = { current_plan: { id: 2, price: 16 }, settings: {} };

  assert.equal(isFreePlan(free), true);
  assert.equal(isFreePlan(paid), false);

  assert.equal(needsZoomAccount(free), false, "free: no zoom to connect");
  assert.equal(needsStripeAccount(free), false, "free: nothing to sell");
  assert.equal(needsMembersFilter(free), false, "free: members_limit is 0");
  assert.equal(needsZoomAccount(paid), true);
  assert.equal(needsStripeAccount(paid), true);
  assert.equal(needsMembersFilter(paid), true);

  // An unset provider means Gmail.
  assert.equal(needsGmailAccount(paid), true);
  assert.equal(
    needsGmailAccount({ ...paid, settings: { email_provider: "gmail" } }),
    true,
  );
  assert.equal(
    needsGmailAccount({ ...paid, settings: { email_provider: "smtp" } }),
    false,
    "a paid shop sending through SMTP has no Gmail account to report",
  );
  assert.equal(
    needsGmailAccount({ ...free, settings: { email_provider: "smtp" } }),
    true,
    "but SMTP is not available on free, so Gmail is still the answer",
  );
});

test("a plan that has not loaded is not mistaken for a free one", () => {
  const {
    isFreePlan,
    needsZoomAccount,
    needsStripeAccount,
  } = require("../src/utilities/planCapabilities");

  for (const unknown of [undefined, {}, { current_plan: null }]) {
    assert.equal(isFreePlan(unknown), false);
    assert.equal(
      needsZoomAccount(unknown),
      true,
      "skipping on absent data would show a paid shop as disconnected",
    );
    assert.equal(needsStripeAccount(unknown), true);
  }
});
