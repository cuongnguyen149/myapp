const number = require('./number');

test('adds 1 + 2 to equal 3', () => {
  expect(number.add(1, 2)).toBe(3);
});
