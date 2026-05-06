// module.test.js

import mut from './module.js';

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

// div tests

test('div of two positive numbers', () => {
  const expected = 2;
  const got = mut.div(10, 5);
  expect(got).toBe(expected);
});

test('div with negative result', () => {
  const expected = -3;
  const got = mut.div(9, -3);
  expect(got).toBe(expected);
});

test('div with decimal result', () => {
  const expected = 2.5;
  const got = mut.div(5, 2);
  expect(got).toBeCloseTo(expected);
});

// containsNumbers tests

test('string with digits returns true', () => {
  const got = mut.containsNumbers('abc123');
  expect(got).toBe(true);
});

test('string with no digits returns false', () => {
  const got = mut.containsNumbers('no digits here');
  expect(got).toBe(false);
});

test('empty string returns false', () => {
  const got = mut.containsNumbers('');
  expect(got).toBe(false);
});

test('string with only digits returns true', () => {
  const got = mut.containsNumbers('12345');
  expect(got).toBe(true);
});

test('digit at beginning returns true', () => {
  const got = mut.containsNumbers('1abc');
  expect(got).toBe(true);
});

test('digit at end returns true', () => {
  const got = mut.containsNumbers('abc1');
  expect(got).toBe(true);
});