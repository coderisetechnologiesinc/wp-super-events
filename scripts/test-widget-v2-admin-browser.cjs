const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const publicRoot = path.resolve(__dirname, '../../../..');
const assert = require('node:assert/strict');
const schema = require('../inc/widget-v2-schema.json');
const defaults = Object.fromEntries(schema.filter(f => f.id).map(f => [f.id, f.default ?? '']));
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = []; let saved = { ...defaults }; let saves = 0;
    page.on('console', msg => { if (['error', 'warning'].includes(msg.type())) console.error('Browser:', msg.text()); });
    page.on('pageerror', error => { errors.push(error.message); console.error(error.message); });
    await page.route('**/*', async route => {
      const request = route.request(); const url = request.url();
      if (url.includes('logrocket') || url.includes('lr-ingest') || url.includes('lr-in')) return route.abort();
      if (url.includes('/wp-json/')) return route.fulfill({ contentType: 'application/json', body: JSON.stringify(url.includes('/shop/info') ? { id: 1, current_plan: { id: 1 }, settings: {}, is_wp_marketplace: true } : {}) });
      if (url.includes('/admin-ajax.php')) {
        const params = new URLSearchParams(request.postData());
        if (params.get('action') === 'servv_widget_v2_settings') {
          if (params.has('config')) { saved = JSON.parse(params.get('config')); saves++; }
          return route.fulfill({ contentType: 'application/json', body: JSON.stringify({ success: true, data: { config: saved } }) });
        }
        if (params.get('action') === 'servv_widget_v2_preview') return route.fulfill({ contentType: 'application/json', body: JSON.stringify({ success: true, data: { html: '<!doctype html><html><body>Preview fixture</body></html>' } }) });
        throw new Error('Unexpected admin AJAX action');
      }
      if (url.startsWith('http://servvplugin.local/admin-widget-test')) {
        let html = fs.readFileSync(process.argv[2], 'utf8');
        html = html.replace(/(<script[^>]+src=[^>]*build\/admin\.js[^>]*>)/, '<script>servvData.env="prod";servvData.install_status="ok";</script>$1');
        return route.fulfill({ contentType: 'text/html', body: html });
      }
      if (url.startsWith('http://servvplugin.local/')) {
        const pathname = new URL(url).pathname;
        const file = path.join(publicRoot, decodeURIComponent(pathname));
        if (fs.existsSync(file) && fs.statSync(file).isFile()) {
          const contentType = pathname.endsWith('.js') ? 'application/javascript' : pathname.endsWith('.css') ? 'text/css' : 'application/octet-stream';
          return route.fulfill({ contentType, body: fs.readFileSync(file) });
        }
      }
      return route.abort();
    });
    await page.goto('http://servvplugin.local/admin-widget-test#/widget');
    try { await page.getByRole('heading', { name: 'Widget', exact: true }).waitFor({ timeout: 15000 }); } catch (error) { console.log('Admin rendered:', (await page.locator('body').innerText()).slice(0, 1200)); console.log('Data:', await page.evaluate(() => ({ hasWp: !!window.wp, route: location.hash, status: window.servvData?.install_status, env: window.servvData?.env }))); await page.screenshot({ path: '/private/tmp/servv-v2-admin-failure.png', fullPage: true }); throw error; }
    await page.getByLabel('Grid', { exact: true }).check();
    await page.locator('input[type=number]').first().fill('12');
    await page.getByRole('button', { name: 'Save settings', exact: true }).click();
    await page.getByText('Widget settings saved.', { exact: true }).waitFor();
    const shortcode = await page.getByLabel('Widget shortcode', { exact: true }).inputValue();
    assert(shortcode.includes('view_mode="grid"') && shortcode.includes('events_per_page="12"'));
    assert.equal(saved.view_mode, 'grid'); assert.equal(saved.events_per_page, 12); assert.equal(saves, 1);
    assert.equal((shortcode.match(/="/g) || []).length, schema.filter(f => f.id).length);
    await page.screenshot({ path: '/private/tmp/servv-v2-admin-desktop.png', fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Admin page should fit mobile viewport');
    await page.screenshot({ path: '/private/tmp/servv-v2-admin-mobile.png', fullPage: true });
    assert.deepEqual(errors, []);
    console.log('Admin browser checks passed: page, settings save, complete shortcode, preview, responsive layout. All saves mocked.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
