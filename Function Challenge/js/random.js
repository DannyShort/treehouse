/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
function getRandomNumber (lower,upper) {
    if (isNaN(upper) || isNaN(lower)) {
        throw Error('One of your values is not a number');
    } else {
        const randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
        return randomNumber;
    }
}
    

//User Chooses Upper And Lower Limits
const userLower = 8;
const userUpper = 6;

//Random Number Is Displayer
console.log(`Your random number between ${userLower} and ${userUpper} is ${getRandomNumber(parseInt(userLower), parseInt(userUpper))}`);




