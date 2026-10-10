const { chromium } = require("playwright");
const fs = require("fs");
const assert = require("node:assert/strict");
const base = require("node:path").resolve(__dirname, "../widgetEventsV2") + "/";
(async () => {
  const b = await chromium.launch({ channel: "chrome", headless: true });
  try {
    const p = await b.newPage({ viewport: { width: 390, height: 844 } });
    const measure = () =>
      p
        .locator(".svv-wgt-v2-container")
        .first()
        .evaluate((el) => {
          const r = el.getBoundingClientRect();
          return {
            x: r.x,
            width: r.width,
            overflow:
              document.documentElement.scrollWidth >
              document.documentElement.clientWidth,
          };
        });
    let m;
    const css = fs.readFileSync(base + "dist/servv-events-v2.css", "utf8");
    const source = fs
      .readFileSync(base + "src/utilities/mobileWidth.js", "utf8")
      .replace("export function", "function");
    for (const dir of ["ltr", "rtl"]) {
      await p.setViewportSize({ width: 390, height: 844 });
      await p.setContent(
        `<html dir="${dir}"><body style="margin:0;padding:0 19px 0 41px"><div style="padding:0 13px 0 7px"><div class="svv-wgt-v2-container" style="--svv-v2-container-width:280px;height:100px"></div><p id="other">Other content</p></div></body></html>`,
      );
      await p.addStyleTag({
        content:
          css +
          " .svv-wgt-v2-container { margin-left:auto !important; margin-right:auto !important; }",
      });
      await p.addScriptTag({
        content:
          source +
          ';window.disposeFit=fitMobileWidth(document.querySelector(".svv-wgt-v2-container"));',
      });
      m = await measure();
      assert(Math.abs(m.x) < 1, JSON.stringify(m));
      assert.equal(m.width, 390);
      assert(!m.overflow);
      await p.setViewportSize({ width: 520, height: 844 });
      await p.waitForFunction(
        () =>
          Math.abs(
            document
              .querySelector(".svv-wgt-v2-container")
              .getBoundingClientRect().width - 520,
          ) < 1,
      );
      m = await measure();
      assert(Math.abs(m.x) < 1);
      assert(!m.overflow);
      await p.setViewportSize({ width: 1440, height: 900 });
      await p.waitForFunction(
        () => !document.querySelector("[data-svv-mobile-width]"),
      );
      m = await measure();
      assert.equal(m.width, 280);
      await p.evaluate(() => window.disposeFit());
      assert.equal(await p.locator("[data-svv-mobile-width]").count(), 0);
      console.log(
        `Nested asymmetric ${dir} containers: viewport fit, resize, cleanup passed.`,
      );
    }
  } finally {
    await b.close();
  }
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
