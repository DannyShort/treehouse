const findPerimeter = require('../JS/Function Challenge/js/perimeter.js');

test('Finds perimeter of a rectangle', () => {
  expect(findPerimeter(10, 20)).toBe(60);
  expect(findPerimeter(40, 10)).toBe(100);
  expect(findPerimeter(10, 10)).toBe(40);
  expect(findPerimeter(10.5, 20)).toBe(61);
  expect(findPerimeter(5.5, 20)).toBe(51);
  expect(findPerimeter(5.1, 20)).toBe(50.2);
});

test('String for width throws an error', () => {
  function useAString() {
    findPerimeter('six', 6);
  }
  expect(useAString).toThrowError('One of your values is not a number');
});

test('String for height throws an error', () => {
  function useAString() {
    findPerimeter(6, 'ten');
  }
  expect(useAString).toThrowError('One of your values is not a number');
});

test('Negative width throws an error', () => {
  function useAString() {
    findPerimeter(-6, 10);
  }
  expect(useAString).toThrowError('You can\'t have a negative width or height');
});

test('Negative height throws an error', () => {
  function useAString() {
    findPerimeter(12, -6);
  }
  expect(useAString).toThrowError('You can\'t have a negative width or height');
});


test('Zero Width Cause an error', () => {
  function useAString() {
    findPerimeter(0, 6);
  }
  expect(useAString).toThrowError('You can\'t have a negative width or height');
});

test('Zero Height Cause an error', () => {
  function useAString() {
    findPerimeter(6, 0);
  }
  expect(useAString).toThrowError('You can\'t have a negative width or height');
});
