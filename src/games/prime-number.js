import runEngine from '../index.js';
import getRandomIntInclusive from '../random-numbers.js';

const correctAnswer = (number) => {
  let count = 1;

  if (number === 0) {
    return 0;
  }

  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) {
      count += 1;
    }
  }
  if (count !== 2) {
    return false;
  }
  return true;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const findPrimeNumber = () => {
  const number = getRandomIntInclusive(0, 100);
  const array = [`Question: ${number}`, 'answer'];
  const result = (correctAnswer(number)) ? 'yes' : 'no';
  array[1] = result;
  return array;
};

const runFindPrimeNumber = () => runEngine(rules, findPrimeNumber);
export default runFindPrimeNumber;
