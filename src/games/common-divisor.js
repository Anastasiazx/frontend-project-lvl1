import getRandomIntInclusive from '../random-numbers.js';
import runEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const findDivisor = () => {
  const number1 = getRandomIntInclusive(1, 100);
  const number2 = getRandomIntInclusive(1, 100);
  const count = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));
  return [`Question: ${count}`, answer];
};

const runGcdGame = () => runEngine(rules, findDivisor);
export default runGcdGame;
