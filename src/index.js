import readlineSync from 'readline-sync';

const runEngine = (rules, getAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 1; i < 4; i += 1) {
    const [Question, answer] = getAnswer();
    const result = answer;
    console.log(Question);
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

export default runEngine;
