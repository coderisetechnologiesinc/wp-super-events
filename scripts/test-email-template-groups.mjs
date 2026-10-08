import assert from 'node:assert/strict';
import { emailTemplateCategory, groupEmailTemplates } from '../src/Components/Pages/emailTemplates/groups.mjs';

for (const [description, expected] of [
  ['Booking confirmation', 'Bookings'],
  ['Registration cancelled', 'Event updates'],
  ['Booking payment receipt', 'Payments'],
  ['Booking reminder', 'Reminders'],
  ['Waiting list confirmation', 'Waiting list'],
  ['Unknown notification', 'Other'],
]) assert.equal(emailTemplateCategory({ description }), expected);
assert.equal(emailTemplateCategory({ description: 'Booking', category: 'Custom category' }), 'Custom category');
assert.equal(emailTemplateCategory({ category: { name: 'Staff' } }), 'Staff');
assert.equal(emailTemplateCategory({ category: 42, subject: 'Payment reminder' }), 'Other');
const templates = [{ id: 1, description: 'Other notice' }, { id: 2, description: 'Second reminder' }, { id: 3, description: 'Booking confirmation' }, { id: 4, description: 'First reminder' }];
const original = JSON.stringify(templates);
const groups = groupEmailTemplates(templates);
assert.deepEqual(groups.map(group => group.label), ['Bookings', 'Reminders', 'Other']);
assert.deepEqual(groups[1].templates.map(template => template.id), [4, 2]);
assert.deepEqual(groups.flatMap(group => group.templates.map(template => template.id)).sort(), [1, 2, 3, 4]);
assert.equal(JSON.stringify(templates), original);
assert.deepEqual(groupEmailTemplates([]), []);
console.log('Email template grouping checks passed');
