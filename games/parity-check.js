import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const parityCheck = () => {
  const userName = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i < 4; i += 1) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (!['yes', 'no'].includes(userAnswer)) {
      return console.log('error');
    } if (num % 2 !== 0 && userAnswer === 'yes') {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`);
    } if (num % 2 === 0 && userAnswer === 'no') {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${userName}!`);
    } if (num % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
    } if (num % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default parityCheck;
