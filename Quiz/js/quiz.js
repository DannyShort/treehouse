/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let score = 0;

// 2. Store the rank of a player

let playerRank ="No Crown";

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

alert('Welcome to my capital city quiz press ok to start');

//Q1
const responseOne = prompt('What is the cpital city of France?');

if (responseOne.toLowerCase() === 'paris') {
  score += 1;
}

//Q2
const responseTwo = prompt('What is the capital city of Japan?');

if (responseTwo.toLowerCase() === 'tokyo') {
  score += 1;
}

//Q3
const responseThree = prompt('What is the capital city of Scotland');

if (responseThree.toLowerCase() === 'edinburgh') {
  score += 1;
}

//Q4
const responseFour = prompt('What is the capital city of Wales');

if (responseFour.toLowerCase() === 'cardiff') {
  score += 1;
}

//Q5
const responseFive = prompt('What is the capital city of Spain');

if (responseFive.toLowerCase() === 'madrid') {
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
  playerRank = "Gold";
} else if ( score === 3 || score === 4 ) {
  playerRank = "Silver";
} else if ( score === 1 || score === 2 ) {
  playerRank = "Bronze";
}


// 6. Output results to the <main> element

document.querySelector('main').innerHTML = `<h2>Your Scored ${score} out of 5</h2> <h2>Rank: ${playerRank}</h2>`;

