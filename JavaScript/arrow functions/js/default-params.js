function sayGreeting (greeting = 'Good Morning,', name = 'student') {
    return `${greeting}, ${name}`;
}


/**
 * Calculates the area os a rectangle
 * @param {number} width - the width of the rectangle
 * @param {number} length - the length of the rectangle
 * @param {string} unit - the unit of measurement
 * @returns {string} - the area of a rectangle and its unit of measurement
 */
function getArea(width, length, unit = 'Sq m') {
    const AREA = width * length;
    return `${AREA} ${unit}`;
  }

console.log(getArea(7,8));

getArea(
