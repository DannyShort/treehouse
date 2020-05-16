const findPerimeter = require('../JS/Function Challenge/js/perimeter.js');

test('Finds perimeter of a rectangle', () => {
  expect(findPerimeter(10, 20)).toBe(60);
  expect(findPerimeter(40, 10)).toBe(100);
  expect(findPerimeter(10, 10)).toBe(40);

});

test('String throws an error', () => {
  function useAString() {
    findPerimeter('six', 6);
  }
  expect(useAString).toThrowError('One of your values is not a number');
});

test('Negative width or height throws an error', () => {
  function useAString() {
    findPerimeter(-6, 6);
  }
  expect(useAString).toThrowError('You can\'t have a negative width or height');
});
