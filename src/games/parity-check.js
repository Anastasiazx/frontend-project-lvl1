import getRandomIntInclusive from '../random-numbers.js';

export const rules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const parityCheck = () => {
  const number = getRandomIntInclusive(0, 100);
  const array = [`Question: ${number}`, 'answer'];
  const result = (number % 2 === 0) ? 'yes' : 'no';
  array[1] = result;
  return array;
};
