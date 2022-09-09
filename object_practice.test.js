const checkObject = require('./objects_practice');

test('check parameter is it object, array or null', () => {
  expect(checkObject({ a: 1 })).toBe(true);
  expect(checkObject([1, 2, 3])).toBe(false);
  expect(checkObject(null)).toBe(false);
});