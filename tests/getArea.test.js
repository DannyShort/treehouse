const getArea = require('../JS/functions/js/multiple-args.js');

test('Finds perimeter of a rectangle with two integers', () => {
  expect(getArea(10, 20, 'sq m')).toBe('200 sq m');
  expect(getArea(40, 10, 'sq m')).toBe('400 sq m');
  expect(getArea(10, 10, 'sq m')).toBe('100 sq m');
});

test('Finds perimeter of a rectangle with floats', () => {
  expect(getArea(10.5, 20, 'sq m')).toBe('210 sq m');
  expect(getArea(20, 5.5, 'sq m')).toBe('110 sq m');
  expect(getArea(5.1, 20, 'sq m')).toBe('102 sq m');
});

test('String for width throws an error', () => {
  function useAString() {
    getArea('six', 6, 'sq m');
  }
  expect(useAString).toThrowError('One of your values is not a number');
});

test('String for height throws an error', () => {
  function useAString() {
    getArea(6, 'ten', 'sq m');
  }
  expect(useAString).toThrowError('One of your values is not a number');
});

test('Negative width throws an error', () => {
  function useAString() {
    getArea(-6, 10, 'sq m');
  }
  expect(useAString).toThrowError('You can\'t have a negative width or height');
});

test('Negative height throws an error', () => {
  function useAString() {
    getArea(12, -6, 'sq m'), 'sq m';
  }
  expect(useAString).toThrowError('You can\'t have a negative width or height');
});


test('0 Width throws an error', () => {
  function useAString() {
    getArea(0, 6), 'sq m';
  }
  expect(useAString).toThrowError('You can\'t have a negative width or height');
});

test('0 Height throws an error', () => {
  function useAString() {
    getArea(6, 0, 'sq m');
  }
  expect(useAString).toThrowError('You can\'t have a negative width or height');
});
