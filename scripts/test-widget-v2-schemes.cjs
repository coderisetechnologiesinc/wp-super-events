// Run with: npm run test:widget-v2-schemes. Loads the built skin and scheme
// sheets the way a placement does and checks the palette invariants that broke
// the dark schemes. No network, no WordPress: the stylesheets are the subject.
const { chromium } = require("playwright");
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");

const DIST = path.resolve(__dirname, "../widgetEventsV2/dist");
const read = (file) => fs.readFileSync(path.join(DIST, file), "utf8");

// Whatever the merchant last picked. The block writes it inline on the
// container for every skin except Glass, which is exactly what used to
// overrule a scheme's own background.
const MERCHANT_BG = "#bbc4f2";

const schemes = fs
  .readdirSync(DIST)
  .map((file) => /^servv-events-v2-scheme-(.+)\.css$/.exec(file)?.[1])
  .filter(Boolean)
  .sort();

const luminance = ([r, g, b]) => {
  const f = (v) => (v / 255 <= 0.03928 ? v / 255 / 12.92 : ((v / 255 + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const parse = (value) => {
  const hex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(value.trim());
  if (hex) {
    const n = hex[1].length === 3 ? [...hex[1]].map((c) => c + c).join("") : hex[1];
    return [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16));
  }
  return (value.match(/[\d.]+/g) || []).map(Number);
};
// Composites a possibly translucent colour over an opaque one.
const over = (fg, bg) => {
  const a = fg.length > 3 ? fg[3] : 1;
  return [0, 1, 2].map((i) => (fg[i] ?? 0) * a + bg[i] * (1 - a));
};

(async () => {
  assert.ok(schemes.length >= 10, `expected the built schemes, found ${schemes.length}`);
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const failures = [];

  try {
    const page = await browser.newPage();

    for (const id of schemes) {
      const dash = id.indexOf("-");
      const skin = id.slice(0, dash);
      const scheme = id.slice(dash + 1);
      const sheets = [read("servv-events-v2.css")];
      if (skin !== "default") sheets.push(read(`servv-events-v2-skin-${skin}.css`));
      sheets.push(read(`servv-events-v2-scheme-${id}.css`));

      const measure = async (inlineBg) => {
        await page.setContent(
          `<div class="svv-wgt-v2-container" data-svv-skin="${skin}" data-svv-scheme="${scheme}"` +
            `${inlineBg ? ` style="--svv-v2-bg:${inlineBg}"` : ""}>` +
            `<div class="svv-wgt-v2"><span class="svv-badge">x</span>` +
            `<div class="svv-search"><input placeholder="p"></div></div></div>`,
        );
        await page.addStyleTag({ content: sheets.join("\n") });
        return page.evaluate(() => {
          const container = document.querySelector(".svv-wgt-v2-container");
          const root = document.querySelector(".svv-wgt-v2");
          const style = getComputedStyle(root);
          return {
            container: getComputedStyle(container).backgroundColor,
            badge: getComputedStyle(document.querySelector(".svv-badge")).color,
            badgeBg: getComputedStyle(document.querySelector(".svv-badge")).backgroundColor,
            placeholder: getComputedStyle(document.querySelector("input"), "::placeholder").color,
            bg: style.getPropertyValue("--svv-bg").trim(),
            ink: style.getPropertyValue("--svv-primary-ink").trim(),
            muted: style.getPropertyValue("--svv-text-muted").trim(),
            primary: style.getPropertyValue("--svv-primary").trim(),
            primaryHover: style.getPropertyValue("--svv-primary-hover").trim(),
          };
        });
      };

      const own = await measure(null);
      // Glass is the one skin the block withholds the token from.
      const live = await measure(skin === "glass" ? null : MERCHANT_BG);
      const dark = luminance(parse(own.container)) < 0.2;

      if (live.container !== own.container) {
        failures.push(
          `${id}: the merchant's background colour overrules the scheme — ` +
            `${own.container} became ${live.container}. The scheme must paint ` +
            `background-color on .svv-wgt-v2-container itself, not hand a value ` +
            `to --svv-v2-bg, which the block writes inline on that element.`,
        );
      }

      // `all: revert` in the reset hands placeholders to the browser's own
      // grey, which knows nothing about the scheme behind it.
      if (live.placeholder === "rgb(117, 117, 117)") {
        failures.push(`${id}: the placeholder is the browser default, not the scheme's muted text`);
      }

      // Primary doubles as a button fill and as ink. A fill deep enough to
      // carry white button text is not necessarily readable as text itself,
      // which is what --svv-primary-ink separates — the add-to-calendar pills
      // and the marked calendar dates are where it shows. Checked on the dark
      // schemes, where a deep fill has nowhere to hide.
      if (dark) {
        const surface = over(parse(live.bg), parse(own.container));
        const [hi, lo] = [luminance(parse(live.ink)), luminance(surface)].sort((a, b) => b - a);
        const inkContrast = (hi + 0.05) / (lo + 0.05);
        if (inkContrast < 4.5) {
          failures.push(
            `${id}: --svv-primary-ink reads at ${inkContrast.toFixed(2)}:1 (${live.ink} ` +
              `on ${live.bg} over ${own.container}) — below 4.5:1. Give the scheme a ` +
              `lighter --svv-primary-ink; --svv-primary stays the button fill.`,
          );
        }
      }

      // What actually matters is that the badge can be read. Its fill is often
      // translucent, so it is composited over the scheme's own background —
      // the panes behind it sit within a few percent of that.
      const composited = over(parse(live.badgeBg), parse(own.container));
      const [hi, lo] = [luminance(parse(live.badge)), luminance(composited)].sort((a, b) => b - a);
      const contrast = (hi + 0.05) / (lo + 0.05);
      if (contrast < 3) {
        failures.push(
          `${id}: the badge reads at ${contrast.toFixed(2)}:1 (${live.badge} on ` +
            `${live.badgeBg} over ${own.container}) — below 3:1. _card.scss colours ` +
            `it with --svv-primary-hover, which has to stay legible against ` +
            `--svv-primary-subtle in this scheme.`,
        );
      }
    }
  } finally {
    await browser.close();
  }

  if (failures.length) {
    console.error("Scheme palette checks FAILED:\n  " + failures.join("\n  "));
    process.exit(1);
  }
  console.log(`Scheme palette checks passed for ${schemes.length} schemes: background ownership, placeholders, badge and ink contrast.`);
})();
