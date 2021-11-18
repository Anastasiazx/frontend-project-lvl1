import getRandomIntInclusive from '../random-numbers.js';
import runEngine from '../index.js';

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

const rules = 'Find the greatest common divisor of given numbers.';

const findDivisor = () => {
  const number = getRandomIntInclusive(1, 100);
  const number2 = getRandomIntInclusive(1, 100);
  const count = `${number} ${number2}`;
  const array = [`Question: ${count}`, 'answer'];
  const result = String(correctAnswer(number, number2));
  array[1] = result;
  return array;
};

const runFindDivisor = () => runEngine(rules, findDivisor);
export default runFindDivisor;
