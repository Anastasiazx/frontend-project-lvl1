import runEngine from '../index.js';
import getRandomIntInclusive from '../random-numbers.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const findPrimeNumber = () => {
  const question = getRandomIntInclusive(0, 100);
  const answer = (correctAnswer(question)) ? 'yes' : 'no';
  return [question, answer];
};

const runPrimeGame = () => runEngine(rules, findPrimeNumber);
export default runPrimeGame;
