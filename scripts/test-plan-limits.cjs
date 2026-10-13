const assert = require('node:assert/strict');
const { test } = require('node:test');
const path = require('node:path');
const babel = require('@babel/core');
const file = path.resolve(__dirname, '../src/utilities/planLimits.js');
const loader = require.extensions['.js'];
require.extensions['.js'] = (mod, filename) => {
  if (filename !== file) return loader(mod, filename);
  mod._compile(babel.transformFileSync(filename, { babelrc: false, configFile: false, plugins: ['@babel/plugin-transform-modules-commonjs'] }).code, filename);
};
const { PLAN_LIMITS, planLimit, filterAllowance, recurringAllowed, multiTicketsAllowed } = require(file);
test('catalog covers the six requested limits', () => {
  assert.equal(PLAN_LIMITS.length, 6);
  assert(PLAN_LIMITS.some(([key,label]) => key === 'filters_limit' && label === 'Filters limit'));
});
test('zero, unlimited, numeric strings, absent and invalid limits', () => {
  assert.equal(planLimit({ filters_limit: 0 }, 'filters_limit', 25), 0);
  assert.equal(planLimit({ filters_limit: '-1' }, 'filters_limit'), -1);
  for (const value of [null, undefined, '', false, 'bad', -2, 1.5]) assert.equal(planLimit({filters_limit:value}, 'filters_limit', 25), 25);
  assert.equal(filterAllowance({filters_limit:0}).isLimitReached, true);
  assert.equal(filterAllowance({filters_limit:-1}, {categories:[1,2,3]}).isLimitReached, false);
});
test('shared filter allowance and independent member cap', () => {
  const free = filterAllowance({id:'1',filters_limit:2,members_limit:0}, {categories:[1],locations:[2]});
  assert.equal(free.totalFilters, 2);
  assert.equal(free.isLimitReached, true);
  assert(!free.filterCategories.includes('Members'));
  const paid = filterAllowance({id:2,filters_limit:25,members_limit:2}, {members:[1,2],categories:[1]});
  assert.equal(paid.isLimitReached, false);
  assert.equal(paid.isMembersLimitReached, true);
  assert.equal(filterAllowance({filters_limit:-1,members_limit:-1}, {members:[1,2]}).isMembersLimitReached, false);
});
test('recurrence follows location-specific quota and accepts catalog feature name', () => {
  const plan={recurring_events_limit:0,offline_recurring_events_limit:100,features:[{title:'Recurring Events',value:'true'}]};
  assert.equal(recurringAllowed(plan,'zoom'),false);
  assert.equal(recurringAllowed(plan,'offline'),true);
  assert.equal(recurringAllowed(plan,'hybrid'),true);
  assert.equal(recurringAllowed({features:plan.features},'offline'),true);
  assert.equal(recurringAllowed({offline_recurring_events_limit:-1},'offline'),true);
});
test('multi ticket flag overrides the plan id', () => {
  for(const value of [false,'false',0,'0']) assert.equal(multiTicketsAllowed({id:2,multi_tickets:value}),false);
  for(const value of [true,'true',1,'1']) assert.equal(multiTicketsAllowed({id:1,multi_tickets:value}),true);
});
