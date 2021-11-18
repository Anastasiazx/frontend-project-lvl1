import getRandomIntInclusive from '../random-numbers.js';

const correctAnswer = (number, number2) => {
  let result;

  for (let i = number; i > 0; i -= 1) {
    if (number % i === 0 && number2 % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};

export const rules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export const findDivisor = () => {
  const number = getRandomIntInclusive(0, 100);
  const number2 = getRandomIntInclusive(0, 100);
  const count = `${number} ${number2}`;
  const array = [`Question: ${count}`, 'answer'];
  const result = String(correctAnswer(number, number2));
  array[1] = result;
  return array;
};
