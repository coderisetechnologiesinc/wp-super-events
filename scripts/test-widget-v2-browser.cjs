const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const base = path.resolve(__dirname, '../widgetEventsV2');
const schema = require('../inc/widget-v2-schema.json');
const config = Object.fromEntries(schema.filter(f => f.id).map(f => [f.id, f.default ?? '']));
const bundle = fs.readFileSync(path.join(base, 'dist/servv-events-v2.js'), 'utf8');
const event = { id: 12, topic: 'WordPress workshop', description: 'A workshop for WordPress users.', provider: 'offline', start_time: '2026-10-15T12:00:00Z', duration: 60, product: { post_id: 120, post_url: 'https://widget.test/event', price: 0, current_quantity: 5 } };
const markup = (id, mode, skin, scheme = '') => `<div data-servv-events-v2 id="${id}" class="svv-wgt-v2-container" data-svv-skin="${skin}" data-svv-scheme="${scheme}"><script type="application/json" data-servv-config>${JSON.stringify({ ajaxUrl: 'https://widget.test/wp-admin/admin-ajax.php', nonce: id, config: { ...config, view_mode: mode, calendar_position: 'hidden', show_quick_date_filters: false }, context: {}, container: { currency: 'CAD', locale: 'en' } })}</script><div data-servv-app></div></div>`;
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = []; const calls = []; let withTickets = false;
    page.on('pageerror', error => { errors.push(error.message); console.error('Page error:', error.message); });
    page.on('console', msg => { if (msg.type() === 'error' || msg.type() === 'warning') console.error('Browser:', msg.text()); });
    await page.route('https://widget.test/**', async route => {
      const req = route.request();
      if (req.url().endsWith('admin-ajax.php')) {
        const params = new URLSearchParams(req.postData()); calls.push(params);
        const action = params.get('action'); let data;
        if (action === 'servv_get_shop_settings') data = { widget_style_settings: '{}' };
        else if (action === 'servv_get_types_list') data = { categories: [{ id: 7, name: 'Workshops' }], languages: [], locations: [{ id: 3, name: 'Berlin' }], members: [], teams: [] };
        else if (action === 'servv_get_events_filtered_list') data = { meetings: [event], page_count: 1, page_number: 1, total_records: 1 };
        else if (action === 'servv_get_event_info') data = { meeting: { ...event, tickets: withTickets ? [{ id: 5, name: 'General', price: 20, current_quantity: 10 }] : [] } };
        else if (action === 'servv_get_events_filtered_list_dates') data = ['2026-10-15'];
        else if (action === 'servv_get_event_questions_list') data = { questions: [] };
        else if (action === 'servv_process_free_order') data = { success: true, data: {} };
        else throw new Error(`Unexpected action ${action}`);
        return route.fulfill({ contentType: 'application/json', body: JSON.stringify(data) });
      }
      return route.fulfill({ contentType: 'text/html', body: markup('one', 'list', 'swiss') + markup('two', 'grid', 'poster') + markup('three', 'list', 'swiss', 'nightgrid') });
    });
    await page.goto('https://widget.test/');
    for (const file of ['servv-events-v2.css', 'servv-events-v2-skin-swiss.css', 'servv-events-v2-skin-poster.css', 'servv-events-v2-scheme-swiss-nightgrid.css', 'servv-events-v2-mobile.css']) await page.addStyleTag({ content: fs.readFileSync(path.join(base, 'dist', file), 'utf8') });
    await page.addScriptTag({ content: bundle });
    try { await page.waitForSelector('#one .svv-card', { timeout: 10000 }); } catch (error) { console.log('Requests:', calls.map(p => p.get('action'))); console.log('Rendered:', (await page.locator('body').innerText()).slice(0, 1500)); await page.screenshot({ path: '/private/tmp/servv-v2-failure.png', fullPage: true }); throw error; } await page.waitForSelector('#two .svv-card');
    assert.equal(await page.locator('#one .svv-events--list').count(), 1);
    assert.equal(await page.locator('#two .svv-events--grid').count(), 1);
    const fonts = await page.evaluate(() => ['one', 'two'].map(id => getComputedStyle(document.querySelector(`#${id} .svv-wgt-v2`)).fontFamily));
    assert.notEqual(fonts[0], fonts[1], 'Different skins must not override each other');
    await page.waitForSelector('#three .svv-card');
    const scheme = await page.evaluate(() => ['one', 'three'].map(id => getComputedStyle(document.querySelector(`#${id} .svv-wgt-v2`)).getPropertyValue('--svv-swiss-paper').trim()));
    assert.notEqual(scheme[0], scheme[1], 'A scheme must recolour the instance that names it');
    assert.equal(scheme[1], '#161616', 'A scheme must apply its own palette');
    assert.equal(await page.evaluate(() => getComputedStyle(document.querySelector('#one .svv-wgt-v2')).fontFamily), fonts[0], 'A scheme must not reach an instance without it');
    assert.equal(await page.locator('#one .svv-datestrip__chip').count(), 2, 'The date strip offers All plus every date that has events');
    assert(await page.locator('#one .svv-datestrip').isHidden(), 'The date strip stays out of the desktop layout');
    assert(await page.locator('#one .svv-filters__toggle').isHidden(), 'The filters drawer toggle stays out of the desktop layout');
    assert(await page.locator('#one .svv-shell__aside .svv-filters select').first().isVisible(), 'Desktop keeps the filters inline');
    await page.locator('#one .svv-card').getByRole('button', { name: 'Book now' }).click();
    await page.waitForSelector('#one dialog[open]');
    const dialog = page.locator('#one dialog:not(.svv-drawer--filters)');
    await dialog.getByLabel(/Email/).fill('test@example.test');
    await dialog.getByLabel(/First Name/).fill('Test');
    await dialog.getByLabel(/Last Name/).fill('User');
    await dialog.getByRole('button', { name: 'Register', exact: true }).click();
    await dialog.getByText('Registration completed!', { exact: true }).waitFor();
    assert.equal(calls.find(params => params.get('action') === 'servv_process_free_order').get('security'), 'one');
    assert.equal(await page.locator('#two .svv-confirmation').count(), 0);
    await page.screenshot({ path: '/private/tmp/servv-v2-browser-desktop.png', fullPage: true });
    await dialog.getByRole('button', { name: '✕', exact: true }).click();

    withTickets = true;
    await page.locator('#one .svv-card').first().getByRole('button', { name: 'Book now' }).click();
    const ticketSelect = dialog.locator('.svv-field__select');
    await ticketSelect.first().waitFor();
    const ticketStyle = await ticketSelect.first().evaluate((el) => {
      const own = getComputedStyle(el);
      return { appearance: own.appearance, border: own.borderTopWidth, padding: own.paddingRight, chevron: getComputedStyle(el.parentElement, '::after').maskImage };
    });
    assert.equal(ticketStyle.appearance, 'none', 'The ticket select drops the native control');
    assert.notEqual(ticketStyle.border, '0px', 'The ticket select takes the form field border');
    assert.notEqual(ticketStyle.padding, '0px', 'The ticket select leaves room for the chevron');
    assert(ticketStyle.chevron.includes('svg'), 'The ticket select gets the chevron the other selects use');
    await dialog.getByRole('button', { name: '✕', exact: true }).click();
    await page.setViewportSize({ width: 390, height: 844 });
    await page.locator('#one .svv-datestrip').waitFor();
    assert(await page.locator('#one .svv-shell__aside .svv-filters').isHidden(), 'Mobile moves the filters out of the aside');
    await page.locator('#one .svv-datestrip__chip').nth(1).click();
    assert(calls.some(params => params.get('action') === 'servv_get_events_filtered_list' && params.get('date') === '2026-10-15'), 'A date chip filters the list by that day');

    const filtersDrawer = page.locator('#one dialog.svv-drawer--filters');
    await page.locator('#one .svv-filters__toggle').click();
    await filtersDrawer.waitFor();
    assert(await filtersDrawer.locator('#svv-filter-drawer-category').isVisible(), 'The drawer carries the filter fields under their own ids');
    await filtersDrawer.getByRole('button', { name: 'Show results' }).click();
    await filtersDrawer.waitFor({ state: 'hidden' });
    await page.screenshot({ path: '/private/tmp/servv-v2-browser-mobile.png', fullPage: true });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Mobile widget should not overflow');
    assert.deepEqual(errors, []);
    console.log('Browser checks passed: independent skins/stores, scoped colour scheme, free registration, styled ticket select, date strip and filters drawer on mobile, no JS errors.');
    if (process.argv[2]) {
      await page.unroute('https://widget.test/**');
      const liveCalls = [];
      await page.route('**/admin-ajax.php', async route => {
        const action = new URLSearchParams(route.request().postData()).get('action');
        if (!['servv_get_shop_settings', 'servv_get_types_list', 'servv_get_events_filtered_list', 'servv_get_events_filtered_list_dates', 'servv_get_event_info', 'servv_get_event_questions_list'].includes(action)) throw new Error(`Live writes prohibited: ${action}`);
        const response = await route.fetch();
        let data; try { data = await response.json(); } catch { data = null; }
        liveCalls.push({ action, status: response.status(), success: data?.success !== false && data !== null && data !== -1, events: data?.meetings?.length });
        await route.fulfill({ response });
      });
      await page.setViewportSize({ width: 1440, height: 1000 });
      await page.goto('http://servvplugin.local');
      await page.setContent(fs.readFileSync(process.argv[2], 'utf8'));
      await page.waitForSelector('.svv-wgt-v2');
      await page.waitForFunction(() => document.querySelectorAll('.svv-events__state').length === 0 || [...document.querySelectorAll('.svv-events__state')].every(node => !node.textContent.includes('Loading')));
      await page.screenshot({ path: '/private/tmp/servv-v2-live-wordpress.png', fullPage: true });
      assert.equal(await page.locator('[data-servv-events-v2] .svv-wgt-v2').count(), 2);
      console.log('Live WordPress read checks:', JSON.stringify(liveCalls));
      assert(liveCalls.length >= 6 && liveCalls.every(call => call.status === 200 && call.success), 'Live WordPress AJAX requests must succeed');
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
