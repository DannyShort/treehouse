/**
 * @param {number} width
 * @param {number} length
 * @param {string} unit
 * @return {string}
 */
function getArea(width, length, unit) {
  if (isNaN(width) || isNaN(length)) {
    throw Error('One of your values is not a number');
  } else if (width <= 0 || length <= 0) {
    throw Error('You can\'t have a negative width or height');
  } else {
    const AREA = width * length;
    return `${AREA} ${unit}`;
  }
}

module.exports = getArea;
