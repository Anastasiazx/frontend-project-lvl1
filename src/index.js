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
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } if (userAnswer === result) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default play;
