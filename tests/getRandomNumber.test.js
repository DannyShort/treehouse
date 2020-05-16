const getRandomNumber = require('../JavaScript/Refactor/js/script.js');

test('Returns random number between 0 & 256', () => {
  expect(getRandomNumber()).toBeGreaterThanOrEqual(0);
  expect(getRandomNumber()).toBeLessThanOrEqual(256);
});
