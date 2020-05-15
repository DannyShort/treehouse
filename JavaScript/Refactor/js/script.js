let html = '';
const NUMBER_OF_CIRCLES = 1000;

/** generates a random number between one & 256
 * @return {number} - returns a random number
 */
function getRandomNumber() {
  return randNum = Math.floor(Math.random() * 256 );
}

/** generates a random rgb color string
 * @return {string} - returns a string that is an rgb color value
 */
function randomColor() {
  let color =`rgb(`;
  color += `${getRandomNumber()},`;
  color += `${getRandomNumber()},`;
  color += `${getRandomNumber()}`;
  return color;
}

for ( let i = 0; i < NUMBER_OF_CIRCLES; i += 1) {
  html += `<div style="background-color:${randomColor()}"></div>`;
}

document.write(html);
