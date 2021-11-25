import getRandomIntInclusive from '../random-numbers.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const parityCheck = () => {
  const question = getRandomIntInclusive(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const runEvenGame = () => runEngine(rules, parityCheck);
export default runEvenGame;
