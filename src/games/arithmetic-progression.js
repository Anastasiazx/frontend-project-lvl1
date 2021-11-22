import getRandomIntInclusive from '../random-numbers.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const formProgression = (firstElement, lengthArray, step) => {
  const progression = [];

  for (let i = 0; i < lengthArray; i += 1) {
    progression[i] = firstElement + (step * i);
  }

  return progression;
};

const defineNumber = () => {
  const firstElement = getRandomIntInclusive(0, 100);
  const lengthArray = getRandomIntInclusive(5, 10);
  const step = getRandomIntInclusive(1, 10);
  const progression = formProgression(firstElement, lengthArray, step);
  const randomElement = progression[getRandomIntInclusive(0, lengthArray)];
  const index = progression.indexOf(randomElement);
  const newProgression = progression.splice(index, 1, '..');
  const answer = newProgression.toString();
  const separator = ' ';
  const question = progression.join(separator);
  return [`Question: ${question}`, answer];
};

const runProgressionGame = () => runEngine(rules, defineNumber);
export default runProgressionGame;
