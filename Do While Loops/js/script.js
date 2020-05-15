const RANDOM_NUMBER = getRandomNumber(10);
let guess;
let guessCount = 0;
let correctGuess = false;

/**
 *
 * @param {number} upper - the upper limit of the random number range
 * @return {number}
 */
function getRandomNumber( upper ) {
  const NUMBER = Math.floor(Math.random() * upper) + 1;
  return NUMBER;
}

do {
  guess = prompt('Makes a Guess between 1 & 10?');
  guessCount += 1;
  if (parseInt(guess) === RANDOM_NUMBER) {
    correctGuess = true;
  }
} while (correctGuess !== true); {
  document.write(`Conrgats, you guessed the correct number. 
  it was ${RANDOM_NUMBER}. it took you ${guessCount} guesses`);
}
