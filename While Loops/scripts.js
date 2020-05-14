function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let counter = 0;
while ( counter <10000 ) {
  const randNumber = randomNumber(20);
  document.write(`${randNumber} `)
  counter += 1;
}