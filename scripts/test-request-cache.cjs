// Run with: npm run test:cache. All transports are mocked; no network is used.
const assert = require("node:assert/strict");
const { test, beforeEach } = require("node:test");
const path = require("node:path");
const babel = require("@babel/core");
const root = path.resolve(__dirname, "..");
const originalLoader = require.extensions[".js"];
const modules = new Set([
  "requestCache.js",
  "adminApi.js",
  "adminApiFetch.js",
  "filters.js",
  "analytics.js",
]);
require.extensions[".js"] = (mod, file) => {
  if (
    (file.startsWith(path.join(root, "src", "utilities")) &&
      modules.has(path.basename(file))) ||
    file === path.join(root, "src", "hooks", "useCacheRefresh.js")
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
    href: "https://site.test/wp-admin/admin.php?page=servv#/events",
    origin: "https://site.test",
  },
  servvData: { nativeAdmin: true, install_status: "ok", nonce: "session-a" },
};
const axios = require("axios");
let calls, handler;
axios.defaults.adapter = async (config) => {
  calls.push(config);
  return handler(config);
};
const wpPath = require.resolve("@wordpress/api-fetch");
let wpCalls, wpHandler;
require.cache[wpPath] = {
  id: wpPath,
  filename: wpPath,
  loaded: true,
  exports: async (options) => {
    wpCalls.push(options);
    return wpHandler(options);
  },
};
const cache = require("../src/utilities/requestCache");
const api = require("../src/utilities/adminApi").default;
const wpApi = require("../src/utilities/adminApiFetch").default;
const allTags = [
  "events",
  "filters",
  "settings",
  "accounts",
  "billing",
  "analytics",
  "bookings",
  "emails",
];
const response = (config, data = { value: "fresh" }) => ({
  config,
  status: 200,
  statusText: "OK",
  headers: {},
  data: JSON.stringify(data),
});
const deferred = () => {
  let resolve;
  const promise = new Promise((r) => {
    resolve = r;
  });
  return { promise, resolve };
};
const url = "/wp-json/servv-plugin/v1/";

beforeEach(async () => {
  cache.invalidateRequests(allTags);
  await Promise.resolve();
  calls = [];
  wpCalls = [];
  handler = async (config) => response(config);
  wpHandler = async () => ({ value: "fresh" });
  window.servvData.nativeAdmin = true;
  window.servvData.nonce = "session-a";
  global.servvData = window.servvData;
});

test("deduplicates concurrent GETs and reuses data on return navigation", async () => {
  const gate = deferred();
  handler = async (config) => {
    await gate.promise;
    return response(config);
  };
  const first = api.get(url + "events/offline?page=1");
  const second = api.get(url + "events/offline?page=1");
  gate.resolve();
  const [a, b] = await Promise.all([first, second]);
  a.data.value = "local draft";
  assert.equal(b.data.value, "fresh");
  assert.equal(
    (await api.get(url + "events/offline?page=1")).data.value,
    "fresh",
  );
  assert.equal(calls.length, 1);
});

test("keys include page, search, filters, occurrence, params and nonce", async () => {
  await api.get(url + "events/offline?page=1&search=abc", {
    params: { location: 7 },
  });
  await api.get(url + "events/offline?search=abc&page=1&location=7");
  assert.equal(calls.length, 1);
  await api.get(url + "events/offline?page=2&search=abc", {
    params: { location: 7 },
  });
  await api.get(url + "events/offline?page=1&search=other");
  await api.get(url + "event/3?occurrence_id=1");
  await api.get(url + "event/3?occurrence_id=2");
  window.servvData.nonce = "session-b";
  await api.get(url + "events/offline?search=abc&page=1&location=7");
  assert.equal(calls.length, 6);
});

test("event save invalidates all list variants, details, bookings and analytics", async () => {
  const paths = [
    "events/offline?page=1",
    "events/zoom?page=2",
    "event/3",
    "event/3/occurrences",
    "bookings",
    "analytics/active",
  ];
  for (const p of paths) await api.get(url + p);
  await api.get(url + "filters/locations");
  await api.patch(url + "event/3", { title: "Changed" });
  for (const p of paths) await api.get(url + p);
  await api.get(url + "filters/locations");
  assert.equal(calls.length, paths.length * 2 + 2);
});

test("filter create/update/delete refreshes filters and dependent event lists", async () => {
  for (const method of ["post", "patch", "delete"]) {
    await api.get(url + "filters/locations");
    await api.get(url + "events/offline");
    const start = calls.length;
    await api[method](url + "filters/locations/7", {});
    await api.get(url + "filters/locations");
    await api.get(url + "events/offline");
    assert.equal(calls.length - start, 3);
  }
});

test("settings, billing and integration changes invalidate their dependencies", async () => {
  for (const mutation of [
    "shop/settings",
    "shop/paymentplans/2",
    "stripe/account",
  ]) {
    await api.get(url + "shop/info");
    await api.get(url + "events/offline");
    const start = calls.length;
    await api.put(url + mutation, {});
    await api.get(url + "shop/info");
    await api.get(url + "events/offline");
    assert.equal(calls.length - start, 3);
  }
});

test("HTTP and application save failures retain valid cached lists", async () => {
  await api.get(url + "events/offline");
  handler = async (config) => {
    throw new axios.AxiosError("failed", "ERR_BAD_RESPONSE", config);
  };
  await assert.rejects(api.patch(url + "event/3", {}));
  assert.equal((await api.get(url + "events/offline")).data.value, "fresh");
  handler = async (config) => response(config, { errorCode: 123 });
  await api.patch(url + "event/3", {});
  await api.get(url + "events/offline");
  assert.equal(calls.length, 3);
});

test("failed reads and application errors are retried rather than cached", async () => {
  handler = async () => {
    throw new Error("offline");
  };
  await assert.rejects(api.get(url + "shop/info"));
  handler = async (config) => response(config, { error: 401 });
  await api.get(url + "shop/info");
  handler = async (config) => response(config);
  assert.equal((await api.get(url + "shop/info")).data.value, "fresh");
  assert.equal(calls.length, 3);
});

test("late read from before a save cannot reach either UI or cache", async () => {
  const old = deferred();
  let reads = 0;
  handler = async (config) => {
    if (config.method === "get" && ++reads === 1) {
      await old.promise;
      return response(config, { value: "old" });
    }
    return response(config, { value: "new" });
  };
  const pending = api.get(url + "events/offline");
  await Promise.resolve();
  await api.patch(url + "event/3", {});
  const fresh = await api.get(url + "events/offline");
  old.resolve();
  assert.equal(fresh.data.value, "new");
  assert.equal((await pending).data.value, "new");
  assert.equal((await api.get(url + "events/offline")).data.value, "new");
  assert.equal(calls.length, 3);
});

test("expired entries refetch and focus refresh notifies mounted readers only when stale", async () => {
  const realNow = Date.now;
  let now = 100000;
  Date.now = () => now;
  const notifications = [];
  const stop = cache.subscribeToInvalidation((tags) =>
    notifications.push(tags),
  );
  try {
    await api.get(url + "events/offline");
    await api.get(url + "shop/info");
    cache.refreshExpiredRequests();
    await Promise.resolve();
    assert.equal(notifications.length, 0);
    now += 61000;
    cache.refreshExpiredRequests();
    await Promise.resolve();
    assert.deepEqual(notifications, [["events"]]);
    await api.get(url + "events/offline");
    await api.get(url + "shop/info");
    assert.equal(calls.length, 3);
    now += 300000;
    await api.get(url + "shop/info");
    assert.equal(calls.length, 4);
  } finally {
    Date.now = realNow;
    stop();
  }
});

test("cache is bounded and evicted entries are refetched", async () => {
  for (let page = 1; page <= 205; page++)
    await api.get(url + `events/offline?page=${page}`);
  await api.get(url + "events/offline?page=1");
  assert.equal(calls.length, 206);
});

test("public requests, external hosts, OAuth URLs and generated content bypass cache", async () => {
  const paths = [
    url + "zoom/url",
    "https://external.test" + url + "shop/info",
    url + "event/data/generate",
  ];
  for (const p of paths) {
    await api.get(p);
    await api.get(p);
  }
  window.servvData.nativeAdmin = false;
  await api.get(url + "shop/info");
  await api.get(url + "shop/info");
  assert.equal(calls.length, 8);
});

test("requests with caller cancellation signals are independent", async () => {
  for (let i = 0; i < 2; i++)
    await api.get(url + "events/offline", {
      signal: new AbortController().signal,
    });
  assert.equal(calls.length, 2);
});

test("WordPress apiFetch shares invalidation with Axios for registrant changes", async () => {
  await wpApi({ path: "/servv-plugin/v1/event/3/registrants?page=1" });
  await wpApi({ path: "/servv-plugin/v1/event/3/registrants?page=1" });
  await api.get(url + "events/offline");
  await wpApi({
    path: "/servv-plugin/v1/event/3/registrants/4",
    method: "DELETE",
  });
  await wpApi({ path: "/servv-plugin/v1/event/3/registrants?page=1" });
  await api.get(url + "events/offline");
  assert.equal(wpCalls.length, 3);
  assert.equal(calls.length, 2);
});

test("invalidation subscribers can unsubscribe and notifications batch tags", async () => {
  let count = 0;
  const stop = cache.subscribeToInvalidation((tags) => {
    count++;
    assert.ok(tags.includes("filters"));
  });
  cache.invalidateRequests(["filters"]);
  cache.invalidateRequests(["events"]);
  await Promise.resolve();
  assert.equal(count, 1);
  stop();
  cache.invalidateRequests(["filters"]);
  await Promise.resolve();
  assert.equal(count, 1);
});

test("installation polling bypasses cache until setup completes", async () => {
  window.servvData.install_status = "pending";
  try {
    await api.get(url + "shop/info");
    await api.get(url + "shop/info");
    assert.equal(calls.length, 2);
  } finally {
    window.servvData.install_status = "ok";
  }
});

test("a mounted list updates after saving without overwriting draft form state", async () => {
  const { JSDOM } = require("jsdom");
  const dom = new JSDOM('<div id="root"></div>', {
    url: "https://site.test/wp-admin/admin.php?page=servv",
  });
  const previousWindow = global.window;
  global.window = dom.window;
  global.document = dom.window.document;
  global.navigator = dom.window.navigator;
  window.servvData = previousWindow.servvData;
  global.IS_REACT_ACT_ENVIRONMENT = true;
  const React = require("react");
  const { createRoot } = require("react-dom/client");
  const useCacheRefresh = require("../src/hooks/useCacheRefresh").default;
  let value = "old",
    mounts = 0,
    editDraft;
  handler = async (config) => response(config, { value });
  function View() {
    const [list, setList] = React.useState("");
    const [draft, setDraft] = React.useState("initial draft");
    editDraft = setDraft;
    const load = async () =>
      setList((await api.get(url + "events/offline")).data.value);
    useCacheRefresh(["events"], load);
    React.useEffect(() => {
      mounts++;
      load();
    }, []);
    return React.createElement(
      "div",
      null,
      React.createElement("output", { id: "list" }, list),
      React.createElement("output", { id: "draft" }, draft),
    );
  }
  const app = createRoot(document.getElementById("root"));
  const settle = () => new Promise((resolve) => setTimeout(resolve, 10));
  try {
    await React.act(async () => {
      app.render(React.createElement(View));
      await settle();
    });
    assert.equal(document.getElementById("list").textContent, "old");
    await React.act(async () => {
      editDraft("unsaved edits");
    });
    value = "new";
    await React.act(async () => {
      await api.patch(url + "event/3", {});
      await settle();
    });
    assert.equal(document.getElementById("list").textContent, "new");
    assert.equal(document.getElementById("draft").textContent, "unsaved edits");
    assert.equal(mounts, 1);
    assert.equal(calls.length, 3);
  } finally {
    await React.act(async () => app.unmount());
    dom.window.close();
    global.window = previousWindow;
    delete global.document;
    delete global.navigator;
  }
});

test("aggregated filter and analytics responses cannot mix pre-save and post-save data", async () => {
  const { getFilters } = require("../src/utilities/filters");
  const { getAnalyticsEvents } = require("../src/utilities/analytics");
  for (const [load, readPaths, mutation] of [
    [
      () => getFilters(1),
      ["filters/locations", "filters/languages", "filters/categories"],
      "filters/locations/7",
    ],
    [
      getAnalyticsEvents,
      ["analytics/happened", "analytics/cancelled", "analytics/active"],
      "event/3",
    ],
  ]) {
    cache.invalidateRequests(allTags);
    const gate = deferred();
    let changed = false,
      delayed = false;
    handler = async (config) => {
      const old = !changed;
      if (
        config.method === "get" &&
        config.url.endsWith(readPaths[1]) &&
        !delayed
      ) {
        delayed = true;
        await gate.promise;
      }
      const data = config.url.includes("filters/")
        ? [{ name: old ? "old" : "new" }]
        : { value: old ? "old" : "new" };
      return response(config, data);
    };
    const pending = load();
    await Promise.resolve();
    await Promise.resolve();
    changed = true;
    await api.patch(url + mutation, {});
    await load();
    gate.resolve();
    const combined = await pending;
    for (const part of Object.values(combined)) {
      assert.equal(Array.isArray(part) ? part[0].name : part.value, "new");
    }
  }
});

test("Axios and WordPress apiFetch reuse the same endpoint cache in both directions", async () => {
  const axiosData = (await api.get(url + "event/12")).data;
  assert.deepEqual(
    await wpApi({ path: "/servv-plugin/v1/event/12" }),
    axiosData,
  );
  assert.equal(calls.length, 1);
  assert.equal(wpCalls.length, 0);
  const wpData = await wpApi({ path: "/servv-plugin/v1/event/13" });
  assert.deepEqual((await api.get(url + "event/13")).data, wpData);
  assert.equal(calls.length, 1);
  assert.equal(wpCalls.length, 1);
});
