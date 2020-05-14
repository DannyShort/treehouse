function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

const upper = 1000000;
const randomNumber = getRandomNumber(upper);
let guess
let attempts = 0;

while (guess !== randomNumber) {
  guess = getRandomNumber(upper);
  attempts += 1;
 // console.log(`Loop number ${attempts + 1}`)
}

document.write(`The random number was ${randomNumber}. It took ${attempts} attempts to guess it.`)
