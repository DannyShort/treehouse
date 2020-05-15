
/**
 * @param {number} upper - the upper limit for the random number range
 * @return {number}
 */
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let counter = 0;
while ( counter <10000 ) {
  const RANDOM_NUMBER = getRandomNumber(20);
  document.write(`${RANDOM_NUMBER} `);
  counter += 1;
}


