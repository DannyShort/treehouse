/**
 * Calculates the perimeter of a rectangle
 * @param {number} width - the width of the rectangle
 * @param {number} height  - the height of the rectangle
 * @return {number} - the perimeter of the rectangle
 */
function findPerimeter(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw Error('One of your values is not a number');
  } else if (width <= 0 || height <= 0) {
    throw Error('You can\'t have a negative width or height');
  } else {
    const PERIMETER = (width * 2) + (height * 2);
    return PERIMETER;
  }
}

/**
 * Calculates two sum of two values
 * @param {number} a - Value One
 * @param {number} b - Value Two
 * @return {number}
 */
function addition(a, b) {
  const SUM_OF = a + b;
  return SUM_OF;
}

/**
 *
 * @param {*} base
 * @param {*} height
 */
function triArea(base, height) {
  const AREA = (base * height) / 2;
  return AREA;
}

function getRemainder(a, b) {
  const REMAINDER = a % b;
  return REMAINDER;
}

function nextEdge(side1, side2) {
  const EDGE = (side1 + side2) - 1;
  return EDGE;
}

module.exports = findPerimeter;

