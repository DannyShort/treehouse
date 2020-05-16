const findPerimeter = require('../JavaScript/Function Challenge/js/perimeter.js');

test('finds perimeter of a rectangle', () => {
  expect(findPerimeter(10, 20)).toBe(60);
});
