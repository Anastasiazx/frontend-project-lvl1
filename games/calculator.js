import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

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

const calculate = () => {
  const userName = greetings();
  console.log('What is the result of the expression?');

  for (let i = 1; i < 4; i += 1) {
    const number = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const count = `${number} ${operator} ${number2}`;
    console.log(`Question: ${count}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    const result = correctAnswer(number, number2, operator);

    if (userAnswer !== result) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
    } if (userAnswer === result) {
      console.log('Correct!');
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default calculate;
