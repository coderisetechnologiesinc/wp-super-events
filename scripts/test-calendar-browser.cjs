const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { chromium } = require("playwright");

// Exercise the shared calendar with real styles and deterministic events.
const root = path.resolve(__dirname, "..");
const output = fs.mkdtempSync(path.join(os.tmpdir(), "servv-calendar-"));
fs.writeFileSync(
  path.join(output, "entry.jsx"),
  `
  import React from 'react';
  import { createRoot } from 'react-dom/client';
  import moment from 'moment';
  import Calendar from ${JSON.stringify(
    path.join(root, "src/Components/Pages/Events/EventCalendar.jsx"),
  )};
  window.t = text => text;
  window.ranges = [];
  const today = moment().hour(9).minute(15);
  const events = [
    { id: 1, post_id: 101, title: 'Morning workshop', _sortKey: today.valueOf(), time: '09:15 am', type: 'Event' },
    { id: 2, post_id: 102, occurrence_id: 'repeat-2', title: 'Online session', _sortKey: today.clone().hour(14).valueOf(), time: '02:15 pm', type: 'Zoom' },
    { id: 3, post_id: 103, title: 'Untimed fixture', _sortKey: today.clone().hour(0).valueOf(), type: 'Event' }
  ];
  createRoot(document.getElementById('servv-wrap')).render(
    <Calendar events={events} onRangeChange={range => window.ranges.push([range.startDate.format('YYYY-MM-DD'), range.endDate.format('YYYY-MM-DD')])} onOpen={event => window.opened = event} />
  );
`,
);

async function run() {
  await new Promise((resolve, reject) => {
    const compiler = webpack({
      mode: "development",
      devtool: false,
      entry: path.join(output, "entry.jsx"),
      output: { path: output, filename: "calendar.js" },
      resolve: {
        extensions: [".js", ".jsx"],
        modules: [path.join(root, "node_modules"), "node_modules"],
      },
      module: {
        rules: [
          {
            test: /\.jsx$/,
            use: {
              loader: require.resolve("babel-loader"),
              options: {
                babelrc: false,
                configFile: false,
                presets: [require.resolve("@babel/preset-react")],
              },
            },
          },
          {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve("css-loader", {
                  paths: [require.resolve("@wordpress/scripts/package.json")],
                }),
                options: { modules: { localIdentName: "[name]__[local]" } },
              },
              require.resolve("sass-loader"),
            ],
          },
        ],
      },
      plugins: [new MiniCssExtractPlugin({ filename: "calendar.css" })],
    });
    compiler.run((error, stats) =>
      compiler.close(() =>
        error
          ? reject(error)
          : stats.hasErrors()
          ? reject(new Error(stats.toString({ all: false, errors: true })))
          : resolve(),
      ),
    );
  });
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  try {
    const page = await browser.newPage({
      viewport: { width: 1280, height: 900 },
    });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setContent(
      '<div id="servv-wrap" style="max-width:1180px;margin:auto;padding:16px;box-sizing:border-box"></div>',
    );
    await page.addStyleTag({ path: path.join(output, "calendar.css") });
    await page.addScriptTag({ path: path.join(output, "calendar.js") });
    await page.getByRole("tab", { name: "Month", exact: true }).waitFor();
    assert.equal(
      await page.locator('[class~="EventCalendar-module__weekday"]').count(),
      7,
    );
    assert(
      [28, 35, 42].includes(
        await page.locator('[class~="EventCalendar-module__day"]').count(),
      ),
    );
    await page.getByRole("button", { name: /Morning workshop/ }).click();
    assert.equal(await page.evaluate(() => window.opened.id), 101);
    await page.screenshot({
      path: path.join(output, "month.png"),
      fullPage: true,
    });
    await page.getByRole("tab", { name: "Week", exact: true }).click();
    assert.equal(
      await page.locator('[class~="EventCalendar-module__hourRow"]').count(),
      24,
    );
    assert.equal(
      await page.locator('[class~="EventCalendar-module__hourCell"]').count(),
      168,
    );
    assert.equal(
      await page
        .locator('[class~="EventCalendar-module__hourRow"]')
        .nth(9)
        .getByRole("button", { name: /Morning workshop/ })
        .count(),
      1,
    );
    assert.equal(
      await page
        .locator('[class~="EventCalendar-module__hourRow"]')
        .nth(14)
        .getByRole("button", { name: /Online session/ })
        .count(),
      1,
    );
    await page.screenshot({
      path: path.join(output, "week.png"),
      fullPage: true,
    });
    await page.getByRole("tab", { name: "Day", exact: true }).click();
    assert.equal(
      await page.locator('[class~="EventCalendar-module__hourCell"]').count(),
      24,
    );
    const before = await page.evaluate(() => window.ranges.at(-1));
    await page.getByRole("button", { name: "Next", exact: true }).click();
    await page.getByRole("status").waitFor();
    assert.notDeepEqual(
      await page.evaluate(() => window.ranges.at(-1)),
      before,
    );
    await page.getByRole("button", { name: "Today", exact: true }).click();
    await page.getByRole("button", { name: /Morning workshop/ }).waitFor();
    await page.screenshot({
      path: path.join(output, "day.png"),
      fullPage: true,
    });
    await page.setViewportSize({ width: 390, height: 844 });
    for (const view of ["Month", "Week", "Day"]) {
      await page.getByRole("tab", { name: view, exact: true }).click();
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${view} must fit the mobile page`,
      );
    }
    assert.deepEqual(errors, []);
    console.log(`Calendar browser checks passed. Screenshots: ${output}`);
  } finally {
    await browser.close();
  }
}
run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
