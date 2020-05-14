/**
 * Calculates the perimeter of a rectangle
 * @param {number} width - the width of the rectangle
 * @param {number} height  - the height of the rectangle
 * @returns {number} - the perimeter of the rectangle
 */
function findPerimeter (width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw Error('One of your values is not a number');
    } else {
        const perimeter = (width * 2) + (height * 2);
        return perimeter;
    }
}

/**
 * Calculates two sum of two values
 * @param {number} a - Value One
 * @param {number} b - Value Two
 * @returns {number} 
 */
function addition(a, b) {
    const sumOf = a + b;
    return sumOf;
}

/**
 * 
 * @param {*} base 
 * @param {*} height 
 */
function triArea(base, height) {
    const area = (base * height) / 2;
    return area;
}

function getRemainder(a,b) {
    const remainder = a % b;
    return remainder;
}

function nextEdge(side1, side2) {
    const edge = (side1 + side2) - 1;
    return edge;
}