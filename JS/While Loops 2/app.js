/**
 * Creates a randon number between 1 and passed value
 * @param {number} upper - the upper limit for the random number range
 * @return {number}
 */
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

const UPPER = 1000000;
const RANDOM_NUMBER = getRandomNumber(UPPER);
let guess;
let attempts = 0;

while (guess !== RANDOM_NUMBER) {
  guess = getRandomNumber(UPPER);
  attempts += 1;
  // console.log(`Loop number ${attempts + 1}`)
}

document.write(`The random number was ${RANDOM_NUMBER}.
 It took ${attempts} attempts to guess it.`);
