/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
function getRandomNumber(lower, upper) {
  if (isNaN(upper) || isNaN(lower)) {
    throw Error('One of your values is not a number');
  } else {
    const RANDOM_NUMBER = Math.floor(Math.random() *
    (upper - lower + 1)) + lower;
    return RANDOM_NUMBER;
  }
}


// User Chooses Upper And Lower Limits
const USER_LOWER = 8;
const USER_UPPER = 6;

// Random Number Is Displayer
console.log(`Your random number between ${USER_LOWER} and 
${USER_UPPER} is ${getRandomNumber(parseInt(USER_LOWER), parseInt(USER_UPPER))}`);
