import getRandomIntInclusive from '../random-numbers.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const parityCheck = () => {
  const number = getRandomIntInclusive(0, 100);
  const answer = (number % 2 === 0) ? 'yes' : 'no';
  return [`Question: ${number}`, answer];
};

const runEvenGame = () => runEngine(rules, parityCheck);
export default runEvenGame;
