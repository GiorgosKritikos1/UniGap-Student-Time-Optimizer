import test from 'node:test';
import assert from 'node:assert/strict';
import { defaultPreferences, moods, nextGap, places, plans, recommendPlans } from '../src/mockData.js';

const query = (extra = {}) => recommendPlans({
  mood: 'study', budget: 2, preferences: defaultPreferences, skippedIds: [], ...extra,
});

test('every mood has an affordable matching plan at the smallest budget', () => {
  for (const mood of moods) {
    const result = query({ mood: mood.id, budget: 1 });
    assert.ok(result.some((plan) => plan.mood === mood.id), `missing budget plan: ${mood.id}`);
  }
});

test('recommendations respect available duration, budget tier and walking limit', () => {
  for (const budget of [1, 2, 3]) {
    const result = query({ budget });
    assert.ok(result.length > 0);
    assert.ok(result.every((plan) => plan.duration <= nextGap.minutes));
    assert.ok(result.every((plan) => plan.tier <= budget));
    assert.ok(result.every((plan) => plan.walking <= defaultPreferences.maxWalking));
  }
});

test('skipped suggestion is removed and the next suggestion surfaces', () => {
  const first = query();
  const filtered = query({ skippedIds: [first[0].id] });
  assert.notEqual(filtered[0].id, first[0].id);
  assert.equal(filtered.length, first.length - 1);
});

test('raising walking limit reveals more plans', () => {
  const short = query({ preferences: { ...defaultPreferences, maxWalking: 5 } });
  const long = query({ preferences: { ...defaultPreferences, maxWalking: 20 } });
  assert.ok(short.length < long.length);
});

test('match scores are bounded and ranked descending', () => {
  const result = query();
  assert.ok(result.every((p) => p.score >= 60 && p.score <= 99));
  assert.ok(result.every((p, index) => index === 0 || result[index - 1].score >= p.score));
});

test('all places and plan activity IDs are well formed', () => {
  const placeIds = new Set(places.map((p) => p.id));
  assert.equal(placeIds.size, places.length);
  for (const plan of plans) {
    assert.ok(plan.activities.every((a) => placeIds.has(a.placeId)));
    assert.equal(plan.activities.reduce((sum, a) => sum + a.minutes, plan.travelMinutes), plan.duration);
  }
});
