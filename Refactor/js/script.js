let html = '';
const numOfCircles = 3000;

function getRandomNumber() {
  return randNum = Math.floor(Math.random() * 256 );
}

function randomColor() {
  let color =`rgb(`
  color += `${getRandomNumber()},`;
  color += `${getRandomNumber()},`;
  color += `${getRandomNumber()}`;
  return color
}

for ( let i = 0; i < numOfCircles; i += 1) {
html += `<div style="background-color:${randomColor()}"></div>`;
}

document.write(html);