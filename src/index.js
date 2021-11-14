import readlineSync from 'readline-sync';
import greetings from './cli.js';

const play = (rules, gameMechanic) => {
  const userName = greetings();
  rules();

  for (let i = 1; i < 4; i += 1) {
    const array = gameMechanic();
    const result = array[1];
    console.log(array[0]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== result) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
    } if (userAnswer === result) {
      console.log('Correct!');
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default play;
