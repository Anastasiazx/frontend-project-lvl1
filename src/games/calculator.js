import getRandomIntInclusive from '../random-numbers.js';
import runEngine from '../index.js';

const correctAnswer = (number, number2, operation) => {
  let result;
  if (operation === '+') {
    result = number + number2;
  } if (operation === '-') {
    result = number - number2;
  } if (operation === '*') {
    result = number * number2;
  }
  return result;
};

const rules = 'What is the result of the expression?';

const calculate = () => {
  const number = getRandomIntInclusive(0, 100);
  const number2 = getRandomIntInclusive(0, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const count = `${number} ${operator} ${number2}`;
  const array = [`Question: ${count}`, 'answer'];
  const result = String(correctAnswer(number, number2, operator));
  array[1] = result;
  return array;
};

const runCalculate = () => runEngine(rules, calculate);
export default runCalculate;
