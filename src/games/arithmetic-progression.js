import getRandomIntInclusive from '../random-numbers.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const formProgression = (firstElement, length, step) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(firstElement + (step * i));
  }

  return progression;
};

const generateQuestion = (progression, hiddenIndex) => {
  const newProgression = progression.slice();
  newProgression[hiddenIndex] = '..';
  return newProgression.join(' ');
};

const defineNumber = () => {
  const firstElement = getRandomIntInclusive(0, 100);
  const length = getRandomIntInclusive(5, 10);
  const step = getRandomIntInclusive(1, 10);
  const progression = formProgression(firstElement, length, step);
  const hiddenIndex = getRandomIntInclusive(0, length - 1);
  const question = generateQuestion(progression, hiddenIndex);
  const answer = (firstElement + (step * hiddenIndex)).toString();
  return [question, answer];
};

const runProgressionGame = () => runEngine(rules, defineNumber);
export default runProgressionGame;
