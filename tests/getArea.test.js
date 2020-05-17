const getArea = require('../JS/functions/js/multiple-args.js');

test('calculates the area of a rectangle', () => {
  expect(getArea(5, 10, "sq m")).toBe('50 sq m');
});
