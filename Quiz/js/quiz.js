/*
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let score = 0;

// 2. Store the rank of a player

let playerRank ='No Crown';

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

alert('Welcome to my capital city quiz press ok to start');

// Q1
const RESPONSE_ONE = prompt('What is the capital city of France?');

if (RESPONSE_ONE.toLowerCase() === 'paris') {
  score += 1;
}

// Q2
const RESPONSE_TWO = prompt('What is the capital city of Japan?');

if (RESPONSE_TWO.toLowerCase() === 'tokyo') {
  score += 1;
}

// Q3
const RESPONSE_THREE = prompt('What is the capital city of Scotland');

if (RESPONSE_THREE.toLowerCase() === 'edinburgh') {
  score += 1;
}

// Q4
const RESPONSE_FOUR = prompt('What is the capital city of Wales');

if (RESPONSE_FOUR.toLowerCase() === 'cardiff') {
  score += 1;
}

// Q5
const RESPONSE_FIVE = prompt('What is the capital city of Spain');

if (RESPONSE_FIVE.toLowerCase() === 'madrid') {
  score += 1;
}


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if ( score === 5 ) {
  playerRank = 'Gold';
} else if ( score === 3 || score === 4 ) {
  playerRank = 'Silver';
} else if ( score === 1 || score === 2 ) {
  playerRank = 'Bronze';
}


// 6. Output results to the <main> element

document.querySelector('main').innerHTML = `<h2>Your Scored ${score} 
out of 5</h2> <h2>Rank: ${playerRank}</h2>`;

