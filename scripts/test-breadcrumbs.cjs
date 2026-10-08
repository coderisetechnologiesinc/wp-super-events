const babel = require('@babel/core');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const Module = require('module');

const origJs = Module._extensions['.js'];
Module._extensions['.jsx'] = Module._extensions['.js'] = function (mod, filename) {
  if (filename.includes('node_modules')) return origJs(mod, filename);
  if (filename.endsWith('textResolver.js')) {
    return mod._compile('exports.t = (key) => key;', filename);
  }
  const src = fs.readFileSync(filename, 'utf8');
  const out = babel.transformSync(src, {
    filename,
    presets: [[require.resolve('@babel/preset-react'), { runtime: 'automatic' }]],
    plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')],
    babelrc: false, configFile: false,
  }).code;
  return mod._compile(out, filename);
};

const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { MemoryRouter } = require('react-router-dom');
const BreadCrumbs = require('./../src/Components/Menu/BreadCrumbs.jsx').default;

const render = (crumbs) => renderToStaticMarkup(
  React.createElement(MemoryRouter, null,
    React.createElement(BreadCrumbs, { breadcrumbs: crumbs })));

const three = render([
  { label: 'Filters', to: '/filters' },
  { label: 'Locations', to: '/filters/list/Locations' },
  { label: 'Edit location' },
]);
console.log(three.replace(/></g, '>\n<'));

assert(three.includes('<nav class="sv-crumbs" aria-label="Breadcrumb">'), 'nav wrapper');
assert(three.includes('href="/filters/list/Locations"'), 'router links keep their href');
assert((three.match(/sv-crumbs__sep/g) || []).length === 2, 'one separator per pair');
assert(three.includes('aria-current="page">Edit location<'), 'last crumb is the current page');
assert(three.includes('aria-label="Back to Locations"'), 'back control points one level up');
assert(/<a class="sv-crumbs__back"[^>]*href="\/filters\/list\/Locations"/.test(three), 'back control is a link when the crumb has a route');

const withAction = render([{ label: 'Settings', action: () => {} }, { label: 'Reminders' }]);
assert(withAction.includes('<button type="button" class="sv-crumbs__back"'), 'back control is a button for callback crumbs');
assert(withAction.includes('<button type="button" class="sv-crumbs__link"'), 'callback crumbs render as buttons');

const single = render([{ label: 'Settings' }]);
assert(single.includes('sv-crumbs sv-crumbs--idle'), 'a single crumb stays idle');
assert(!single.includes('sv-crumbs__back'), 'a single crumb has nothing to go back to');

const sparse = render([{ label: 'Filters', to: '/filters' }, null, { label: 'New' }]);
assert((sparse.match(/sv-crumbs__sep/g) || []).length === 1, 'a skipped level is dropped');

console.log('BreadCrumbs render checks passed.');
