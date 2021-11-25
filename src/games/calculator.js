import getRandomIntInclusive from '../random-numbers.js';
import runEngine from '../index.js';

const rules = 'What is the result of the expression?';

const correctAnswer = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown operation');
  }
};

const calculate = () => {
  const number1 = getRandomIntInclusive(0, 100);
  const number2 = getRandomIntInclusive(0, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomIntInclusive(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(correctAnswer(number1, number2, operator));
  return [question, answer];
};

const runCalcGame = () => runEngine(rules, calculate);
export default runCalcGame;
