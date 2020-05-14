const getRandomNumber = (upper) => {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

const getArea = (width, height, unit) => {
  const area = width * height;
  return `${area} ${unit}`
}