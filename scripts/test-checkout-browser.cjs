const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const base = path.resolve(__dirname, '..');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
    const calls = []; const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    let ticketed = false; let recurring = false;
    const event = () => ({ currency: 'USD', product: { price: 25, current_quantity: 3 }, meeting: {
      occurrences: recurring ? [
        { id: 'one', start_time: '2026-10-15T12:00:00Z', product: { price: 20, current_quantity: 2 } },
        { id: 'two', start_time: '2026-10-16T12:00:00Z', product: { price: 35, current_quantity: 3 } },
      ] : [],
      topic: 'Checkout test', start_time: '2026-10-15T12:00:00Z', timezone: 'Europe/Kyiv',
      tickets: ticketed ? [
        { id: 1, name: 'Free', price: 0, current_quantity: 2 },
        { id: 2, name: 'Donation', is_donation: true, current_quantity: null },
        { id: 3, name: 'Sold', price: 15, current_quantity: 0 },
        { id: 4, name: 'Future', price: 15, current_quantity: 5, start_datetime: '2099-01-01' },
      ] : [],
    } });
    await page.route('https://checkout.test/**', route => {
      if (route.request().method() !== 'POST') return route.fulfill({ contentType: 'text/html', body: '<div id="servv-on-product-widget"></div>' });
      const params = new URLSearchParams(route.request().postData()); calls.push(params);
      const action = params.get('action');
      const data = action === 'servv_get_event_info' ? event() : action === 'servv_get_shop_settings' ? { free_registrants_limit: 2 } : action === 'servv_create_checkout_session' ? { success: true, data: { public_key: 'pk_test_mock', client_secret: 'secret' } } : { success: true };
      return route.fulfill({ contentType: 'application/json', body: JSON.stringify(data) });
    });
    const boot = async (theme = '') => {
      await page.goto('https://checkout.test/');
      await page.addStyleTag({ content: theme + fs.readFileSync(path.join(base, 'src/checkout.css'), 'utf8') });
      for (const file of ['react/umd/react.development.js', 'react-dom/umd/react-dom.development.js', 'moment/min/moment.min.js']) await page.addScriptTag({ content: fs.readFileSync(path.join(base, 'node_modules', file), 'utf8') });
      await page.evaluate(() => {
        window.wp = { element: { ...React, ...ReactDOM }, domReady: fn => fn() };
        window.ReactJSXRuntime = { Fragment: React.Fragment, jsx: (type, props, key) => React.createElement(type, { ...props, key }), jsxs: (type, props, key) => React.createElement(type, { ...props, key }) };
        window.servvCheckoutData = { nonce: 'test', postId: 12, ajaxUrl: 'https://checkout.test/ajax' };
        window.Stripe = () => ({ initEmbeddedCheckout: async options => ({ mount: node => {
          const button = document.createElement('button'); button.textContent = 'Mock pay'; button.onclick = options.onComplete; node.append(button);
        }, destroy: () => {} }) });
      });
      await page.addScriptTag({ content: fs.readFileSync(path.join(base, 'build/checkout.js'), 'utf8') });
      await page.getByRole('button', { name: /Add one/ }).first().waitFor();
    };
    const contact = async () => {
      await page.getByLabel('First name *', { exact: true }).first().fill('Test');
      await page.getByLabel('Last name *', { exact: true }).first().fill('User');
      await page.getByLabel('Email *', { exact: true }).first().fill('test@example.com');
    };
    await boot();
    await page.getByRole('button', { name: 'Add one Standard ticket' }).click();
    await page.getByRole('button', { name: 'Add one Standard ticket' }).click();
    await page.getByRole('button', { name: 'Proceed to checkout' }).click();
    assert.equal(await page.locator('.svvc-primary').evaluate(node => getComputedStyle(node).backgroundColor), 'rgb(98, 36, 231)');
    await page.getByRole('button', { name: 'Continue to checkout' }).click();
    assert.equal(calls.filter(p => p.get('action') === 'servv_create_checkout_session').length, 0);
    await contact();
    assert.equal(await page.locator('.svvc-summary-total').innerText(), 'Total\n50 USD');
    await page.getByRole('button', { name: 'Continue to checkout' }).click();
    await page.getByRole('button', { name: 'Mock pay' }).click();
    await page.getByText('Registration complete!', { exact: true }).waitFor();
    const paid = calls.find(p => p.get('action') === 'servv_create_checkout_session');
    assert.equal(paid.get('email'), 'test@example.com');
    assert.equal(paid.get('additional_registrants'), 'test@example.com,Test,User');
    assert.equal(await page.locator('.svvc-registrant').count(), 2);
    ticketed = true;
    await boot(':root { --wp--preset--color--primary: #123456; }');
    await page.getByRole('button', { name: 'Add one Free ticket' }).click();
    await page.getByRole('button', { name: 'Add one Free ticket' }).click();
    assert(await page.getByRole('button', { name: 'Add one Free ticket' }).isDisabled());
    assert(await page.getByRole('button', { name: 'Add one Sold ticket' }).isDisabled());
    assert.equal(await page.getByRole('button', { name: 'Add one Future ticket' }).count(), 0);
    await page.getByRole('button', { name: 'Proceed to checkout' }).click();
    assert.equal(await page.locator('.svvc-primary').evaluate(node => getComputedStyle(node).backgroundColor), 'rgb(18, 52, 86)');
    assert.equal(await page.locator('.svvc-form').evaluate(node => getComputedStyle(node).backgroundColor), 'rgb(255, 255, 255)');
    await contact();
    await page.getByRole('button', { name: 'Complete registration' }).click();
    await page.getByText('Registration complete!', { exact: true }).waitFor();
    const free = calls.find(p => p.get('action') === 'servv_process_free_order');
    assert.equal(free.get('ticket_id'), '1');
    assert.equal(free.get('additional_registrants'), 'test@example.com,Test,User,1');
    await boot();
    await page.getByRole('button', { name: 'Add one Donation ticket' }).click();
    await page.getByRole('button', { name: 'Proceed to checkout' }).click();
    await contact();
    await page.getByRole('button', { name: 'Continue to checkout' }).click();
    await page.getByRole('alert').waitFor();
    await page.getByLabel('Donation (USD) *', { exact: true }).fill('10');
    assert.equal(await page.locator('.svvc-summary-total').innerText(), 'Total\n10 USD');
    await page.setViewportSize({ width: 375, height: 900 });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Mobile checkout must not overflow');
    await page.screenshot({ path: '/tmp/servv-checkout-mobile.png', fullPage: true });
    await page.getByRole('button', { name: 'Continue to checkout' }).click();
    await page.getByRole('button', { name: 'Mock pay' }).waitFor();
    assert.equal(calls.filter(p => p.get('action') === 'servv_create_checkout_session').at(-1).get('donation_amount'), '10');
    ticketed = false; recurring = true;
    await boot(':root { --wp--preset--color--primary: #123456; --wp--preset--color--base: #fafafa; --wp--preset--color--contrast: #222222; }');
    await page.getByRole('button', { name: 'Add one Standard ticket' }).click();
    await page.getByLabel('Event date').selectOption('two');
    assert.equal(await page.locator('.svvc-cart-bar').count(), 0, 'Changing dates clears the selection');
    await page.getByRole('button', { name: 'Add one Standard ticket' }).click();
    await page.getByRole('button', { name: 'Add one Standard ticket' }).click();
    await page.getByRole('button', { name: 'Proceed to checkout' }).click();
    await contact();
    await page.getByLabel('Use the same contact details for all tickets').uncheck();
    await page.getByLabel('First name *', { exact: true }).nth(1).fill('Second');
    await page.getByLabel('Last name *', { exact: true }).nth(1).fill('Attendee');
    await page.getByLabel('Email *', { exact: true }).nth(1).fill('second@example.com');
    assert.equal(await page.locator('.svvc-summary-total').innerText(), 'Total\n70 USD');
    assert.equal(await page.locator('.svvc-form').evaluate(node => getComputedStyle(node).backgroundColor), 'rgb(250, 250, 250)');
    await page.getByRole('button', { name: 'Continue to checkout' }).click();
    await page.getByRole('button', { name: 'Mock pay' }).click();
    await page.getByText('Registration complete!', { exact: true }).waitFor();
    const recurringPaid = calls.filter(p => p.get('action') === 'servv_create_checkout_session').at(-1);
    assert.equal(recurringPaid.get('occurrence_id'), 'two');
    assert.equal(recurringPaid.get('additional_registrants'), 'second@example.com,Second,Attendee');
    assert.equal(recurringPaid.get('same_for_all'), null);
    assert(await page.locator('.svvc-registrant').nth(1).innerText().then(text => text.includes('second@example.com')));
    assert.deepEqual(errors, []);
    console.log('Checkout passed: paid standard, free tickets, validation, limits, donation, partial theme palette, mobile layout, Stripe completion.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
