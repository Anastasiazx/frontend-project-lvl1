import getRandomIntInclusive from '../random-numbers.js';

const formProgression = () => {
  const arrayNumbers = [];
  arrayNumbers[0] = getRandomIntInclusive(0, 100);
  const lengthArray = getRandomIntInclusive(5, 10);
  const step = getRandomIntInclusive(1, 10);

  for (let i = 1; i < lengthArray; i += 1) {
    arrayNumbers[i] = arrayNumbers[i - 1] + step;
    arrayNumbers.push();
  }
  return arrayNumbers;
};

export const rules = () => {
  console.log('What number is missing in the progression?');
};

export const defineNumber = () => {
  const arrayNumbers = formProgression();
  const randomElement = arrayNumbers[getRandomIntInclusive(0, 100) * arrayNumbers.length];
  const index = arrayNumbers.indexOf(randomElement);
  const newArray = arrayNumbers.splice(index, 1, '..');
  const result = newArray.toString();
  const separator = ' ';
  const progression = arrayNumbers.join(separator).toString();
  const array = [`Question: ${progression}`, 'answer'];
  array[1] = result;
  return array;
};
