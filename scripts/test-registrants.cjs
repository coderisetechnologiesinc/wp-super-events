const assert = require('node:assert/strict');
const { test } = require('node:test');
const path = require('node:path');
const babel = require('@babel/core');
const vm = require('node:vm');
const load = (name, mocks) => {
  const exports = {};
  vm.runInNewContext(babel.transformFileSync(path.join(__dirname, '../src/utilities', name), { babelrc:false, configFile:false, plugins:['@babel/plugin-transform-modules-commonjs'] }).code, { exports, require: name => mocks[name], URLSearchParams, servvData:{nonce:'fixture'} });
  return exports;
};
test('event links preserve provider, occurrence and registrants destination', () => {
  const {eventRoutePayload,eventAdminPath}=load('events.js',{'./adminApi':{}});
  assert.equal(eventAdminPath(eventRoutePayload({post_id:12,type:'Zoom',occurrence_id:'occ /1'},{registrants:true})), '/events/zoom/12/registrants?occurrence_id=occ+%2F1');
  assert.equal(eventAdminPath(eventRoutePayload({post_id:12,type:'Event'})), '/events/offline/12');
  assert.equal(eventAdminPath({id:12,type:'Zoom',registrants_view:true}), '/events/zoom/12/registrants');
});
test('page and token pagination normalize names, totals and encoded occurrence', async () => {
  const requests=[];
  const api=load('registrants.js',{'./adminApi':{},'./adminApiFetch':async args=>{requests.push(args);return {registrants:[{id:1,first_name:'Ada',last_name:'Lovelace',email:'ada@test.dev'}],page_number:2,page_count:3,total_records:41,next_page_token:'next'};}});
  const result=await api.fetchRegistrants({postID:12,occurrenceId:'occ /1',page:2,throwOnError:true});
  assert.equal(result.registrants[0].firstName,'Ada');assert.equal(result.pagination.totalRecords,41);
  assert(requests[0].path.includes('occurrence_id=occ%20%2F1'));
  const token=await api.fetchRegistrantsWithToken({postID:12,next_page_token:'a+b',throwOnError:true});
  assert.equal(token.pagination.nextPageToken,'next');assert(requests[1].path.includes('next_page_token=a%2Bb'));
});
test('new screen propagates fetch failures instead of showing a false empty list', async () => {
  const api=load('registrants.js',{'./adminApi':{},'./adminApiFetch':async()=>{throw Error('Unavailable');}});
  await assert.rejects(api.fetchRegistrants({postID:12,throwOnError:true}),/Unavailable/);
  await assert.rejects(api.fetchRegistrantsWithToken({postID:12,throwOnError:true}),/Unavailable/);
  assert.equal((await api.fetchRegistrants({postID:12})).registrants.length,0);
});
test('adding an attendee edits only registrants and preserves occurrence context', async () => {
  const requests=[];
  const api=load('registrants.js',{'./adminApi':{patch:async(...args)=>{requests.push(args);return {data:{success:true}};}},'./adminApiFetch':{}});
  await api.addRegistrant({postID:12,occurrenceId:'occ-2',firstName:' Ada ',lastName:' Lovelace ',email:' ada@test.dev '});
  assert.deepEqual(JSON.parse(JSON.stringify(requests[0][1])),{registrants:[{first_name:'Ada',last_name:'Lovelace',email:'ada@test.dev'}]});
  assert.equal(requests[0][2].params.occurrence_id,'occ-2');
});
