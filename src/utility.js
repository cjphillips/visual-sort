export const MAX_ELEMENT_VALUE = 100;
export const MIN_ELEMENT_VALUE = 1;

export const getRandomInt = (min, max) => {
  /*
  Get a random integer between min (inclusive) and max (exclusive).
  */
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
