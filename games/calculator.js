import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const correctResult = (num1, num2, operation) => {
  let result;
  if (operation === '+') {
    result = num1 + num2;
  } if (operation === '-') {
    result = num1 - num2;
  } if (operation === '*') {
    result = num1 * num2;
  }
  return result;
};

const calculate = () => {
  const userName = greetings();
  console.log('What is the result of the expression?');

  for (let i = 1; i < 4; i += 1) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const count = `${num1} ${operator} ${num2}`;
    console.log(`Question: ${count}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    const result = correctResult(num1, num2, operator);

    if (userAnswer !== result) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
    } if (userAnswer === result) {
      console.log('Correct!');
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default calculate;
calculate();
