const randomNumber = getRandomNumber(10);
let guess;
let guessCount = 0;
let correctGuess = false;

function getRandomNumber( upper ) {
  const num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do {
  guess = prompt('Makes a Guess between 1 & 10?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while (correctGuess !== true){
  document.write(`Conrgats, you guessed the correct number. it was ${randomNumber}. it took you ${guessCount} guesses`)
}
