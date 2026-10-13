const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const esbuild = require('../widgetEventsV2/node_modules/esbuild');
const sass = require('sass');
const root = path.resolve(__dirname, '..');
const output = '/tmp/servv-registrants-browser';
(async () => {
  fs.mkdirSync(output, { recursive: true });
  await esbuild.build({
    stdin: { contents: `
      import React from 'react';
      import { createRoot } from 'react-dom/client';
      import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
      import apiFetch from '@wordpress/api-fetch';
      import EventRegistrantsPage from './src/Components/Pages/EventRegistrantsPage';
      import EventEditorRoute from './src/Components/CreateEvent/EventEditorRoute';
      import PlansPage from './src/Components/Pages/PlansPage';
      import { useServvStore } from './src/store/useServvStore';
      import { eventAdminPath, eventRoutePayload } from './src/utilities/events';
      apiFetch.use(apiFetch.createRootURLMiddleware(location.origin + '/wp-json/'));
      apiFetch.use(apiFetch.createNonceMiddleware('fixture'));
      useServvStore.setState({settings:{current_plan:{id:location.search.includes('free')?1:2,price:location.search.includes('free')?0:16}}});
      function Start(){const navigate=useNavigate();return <button onClick={()=>navigate(eventAdminPath(eventRoutePayload({post_id:12,type:'Zoom',occurrence_id:'occ-1'},{registrants:true})))}>Open registrants</button>}
      createRoot(document.getElementById('servv-wrap')).render(<BrowserRouter><Routes>
        <Route path='/events' element={<Start/>}/>
        <Route path='/events/:provider/:id/registrants' element={<EventRegistrantsPage/>}/>
        <Route path='/events/zoom/:id' element={<EventEditorRoute/>}/>
        <Route path='/plans' element={<PlansPage/>}/>
      </Routes></BrowserRouter>);
    `, resolveDir: root, sourcefile: 'registrants-fixture.jsx', loader: 'jsx' },
    bundle: true, jsx: 'automatic', tsconfigRaw: { compilerOptions: { jsx: 'react-jsx' } }, outdir: output, entryNames: 'app', logLevel: 'silent',
    plugins: [
      { name: 'scss', setup(build) { build.onLoad({ filter: /\.scss$/ }, (args) => ({ contents: sass.compile(args.path).css, loader: 'local-css', resolveDir: path.dirname(args.path) })); } },
      // Legacy editor icons use webpack's ReactComponent SVG export. The
      // registrants screen uses Heroicons; these exports only let its legacy
      // route wrapper be bundled without the webpack SVG loader.
      { name: 'legacy-svg', setup(build) { build.onLoad({ filter: /\.svg$/ }, () => ({ contents: 'import React from "react"; export const ReactComponent = props => React.createElement("svg", props); export default "";', loader: 'js', resolveDir: root })); } },
      { name: 'webpack-locales', setup(build) { build.onLoad({ filter: /textResolver\.js$/ }, (args) => ({ contents: fs.readFileSync(args.path, 'utf8').replace(/const ctx = require\.context\([\s\S]*?\);/, 'const ctx = Object.assign(() => ({}), { keys: () => [] });'), loader: 'js' })); } },
    ],
    loader: { '.png': 'dataurl', '.svg': 'dataurl' },
  });
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const p = await browser.newPage({ viewport: { width: 1440, height: 1000 }, acceptDownloads: true });
    p.setDefaultTimeout(10000);
    const errors = []; const calls = []; let fail = false; let deleted = false; let added = false;
    p.on('pageerror', (error) => { errors.push(error.message); console.error('Browser:', error.stack); });
    await p.route('**/*', async route => {
      const request = route.request(); const url = new URL(request.url()); calls.push({ path: url.pathname, query: url.search, method: request.method(), body: request.postData() });
      if (url.hostname !== 'servvplugin.local') return route.abort();
      if (url.pathname === '/app.js' || url.pathname === '/app.css') return route.fulfill({ contentType: url.pathname.endsWith('.js') ? 'application/javascript' : 'text/css', body: fs.readFileSync(output + url.pathname) });
      if (url.pathname.startsWith('/wp-json/')) {
        let data;
        if (url.pathname.endsWith('/shop/info')) data = { current_plan: { id: 1, price: 0 }, is_wp_marketplace: false };
        else if (url.pathname.endsWith('/shop/paymentplans')) data = [{id:1,name:'Free',price:0,filters_limit:2},{id:2,name:'Premium',price:16,filters_limit:25}];
        else if (/\/event\/12$/.test(url.pathname)) {
          if (request.method() === 'PATCH') { added = true; data = { success: true }; }
          else data = { meeting: { topic: 'Fixture event' }, product: { current_quantity: 10 } };
        } else if (/\/registrants\/(1|3)$/.test(url.pathname) && request.method() === 'DELETE') { deleted = true; data = { success: true }; }
        else if (url.pathname.endsWith('/resend')) data = { success: true };
        else if (url.pathname.endsWith('/registrants')) {
          if (fail) return route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({message:'Fixture error',code:'fixture'}) });
          const isSecond = url.searchParams.has('next_page_token') || url.searchParams.get('page') === '2';
          data = { registrants: isSecond ? [{id:2,first_name:'Grace',last_name:'Hopper',email:'grace@example.test'}] : [...(deleted?[]:[{id:1,first_name:'Ada',last_name:'Lovelace',email:'ada@example.test'}]), ...(added?[{id:3,first_name:'New',last_name:'Attendee',email:'new@example.test'}]:[])], page_count:2,total_records:2,next_page_token: isSecond ? null : 'next-token' };
        } else throw Error('Unexpected request ' + request.method() + ' ' + url.pathname);
        return route.fulfill({ contentType: 'application/json', body: JSON.stringify(data) });
      }
      return route.fulfill({ contentType: 'text/html', body: '<!doctype html><html><head><link rel="stylesheet" href="/app.css"></head><body style="margin:0"><script>window.servvData={nonce:"fixture",env:"prod",nativeAdmin:true};window.t=value=>value;</script><div id="servv-wrap"></div><script src="/app.js"></script></body></html>' });
    });
    await p.goto('http://servvplugin.local/events');
    await p.getByRole('button', { name: 'Open registrants' }).click();
    await p.getByText('ada@example.test', { exact: true }).waitFor();
    assert(p.url().includes('/events/zoom/12/registrants?occurrence_id=occ-1'));
    assert(!await p.getByRole('button', { name: 'Save changes', exact: true }).count());
    await p.getByRole('button', { name: 'Next', exact: true }).click();
    await p.getByText('grace@example.test', { exact: true }).waitFor();
    assert(calls.some(call => call.query.includes('next_page_token=next-token') && call.query.includes('occurrence_id=occ-1')));
    await p.getByRole('button', { name: 'Previous', exact: true }).click();
    await p.getByText('ada@example.test', { exact: true }).waitFor();
    await p.getByRole('checkbox', { name: 'Select ada@example.test', exact: true }).locator('..').click();
    await p.getByRole('button', { name: 'Resend to selected', exact: true }).click();
    await p.getByRole('button', { name: 'Add registrant', exact: true }).click();
    await p.getByPlaceholder('First name', { exact:true }).fill('New');
    await p.getByPlaceholder('Last name', { exact:true }).fill('Attendee');
    await p.getByPlaceholder('Email', { exact:true }).fill('new@example.test');
    await p.getByRole('dialog').getByRole('button', { name:'Add registrant',exact:true }).click();
    await p.getByText('new@example.test', { exact:true }).waitFor();
    const mutation = calls.find(call => call.method === 'PATCH');
    assert.deepEqual(JSON.parse(mutation.body), {registrants:[{first_name:'New',last_name:'Attendee',email:'new@example.test'}]});
    const download = p.waitForEvent('download');
    await p.getByRole('button', { name: 'Export CSV', exact:true }).click();
    const exported = await download;
    const csv = fs.readFileSync(await exported.path(), 'utf8'); assert(csv.includes('Grace')); assert(csv.includes('New'));
    await p.getByRole('checkbox', { name: 'Select ada@example.test', exact: true }).locator('..').click();
    await p.getByRole('button', { name:'Delete selected',exact:true }).click();
    await p.getByRole('dialog').getByRole('button', { name:'Delete',exact:true }).click();
    await p.getByText('ada@example.test', { exact:true }).waitFor({state:'detached'});
    await p.setViewportSize({ width:390,height:844 });
    assert.equal(await p.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth), false);
    await p.screenshot({path:output+'/mobile.png',fullPage:true});
    await p.goto('http://servvplugin.local/events/offline/12/registrants?occ=occ-2&free');
    await p.getByText('new@example.test', { exact:true }).waitFor();
    assert(await p.getByRole('button', { name:'Add registrant',exact:true }).isDisabled());
    await p.getByRole('button', {name:'Next',exact:true}).click(); await p.getByText('grace@example.test',{exact:true}).waitFor();
    assert(calls.some(call=>call.query.includes('page=2')&&call.query.includes('occurrence_id=occ-2')));
    await p.goto('http://servvplugin.local/events/zoom/12?registrants=true&occ=legacy');
    await p.getByRole('heading',{name:'Registrants',exact:true}).waitFor();
    await p.getByText('new@example.test',{exact:true}).waitFor();
    fail = true;
    await p.goto('http://servvplugin.local/events/offline/12/registrants?occ=failure');
    await p.getByRole('alert').filter({hasText:'Unable to load registrants'}).waitFor();
    assert(!await p.getByRole('heading',{name:'No registrants yet',exact:true}).count());
    fail = false;
    await p.getByRole('button',{name:'Try again',exact:true}).click(); await p.getByText('new@example.test',{exact:true}).waitFor();
    await p.goto('http://servvplugin.local/plans'); await p.getByText('Filters limit: 2',{exact:true}).waitFor();
    assert(!await p.getByText(/Free registrations limit/).count());
    assert.deepEqual(errors, []);
    console.log('Registrants passed: navigation, occurrence context, Zoom/offline pagination, add, delete, resend, full CSV, free-plan restriction, legacy links, retry, mobile width, hidden plan field.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
