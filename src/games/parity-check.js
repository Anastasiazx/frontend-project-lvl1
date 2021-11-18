import getRandomIntInclusive from '../random-numbers.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const parityCheck = () => {
  const number = getRandomIntInclusive(0, 100);
  const array = [`Question: ${number}`, 'answer'];
  const result = (number % 2 === 0) ? 'yes' : 'no';
  array[1] = result;
  return array;
};

const runParityCheck = () => runEngine(rules, parityCheck);
export default runParityCheck;
