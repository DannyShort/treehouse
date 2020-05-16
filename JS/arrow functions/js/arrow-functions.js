const GET_RANDOM_NUMBER = (upper) => {
  const RANDOM_NUMBER = Math.floor( Math.random() * upper ) + 1;
  return RANDOM_NUMBER;
};

const GET_AREA = (width, height, unit) => {
  const AREA = width * height;
  return `${AREA} ${unit}`;
};
