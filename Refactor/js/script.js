let html = '';
let rgbColor;
const numOfCircles = 100;

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

for ( let i = 0; i < numOfCircles; i +=1) {
rgbColor = randomColor();
html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);