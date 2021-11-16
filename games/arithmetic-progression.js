const formProgression = () => {
  const arrayNumbers = [];
  arrayNumbers[0] = Math.floor(Math.random() * 100);
  const lengthArray = Math.floor(Math.random() * 5) + 5;
  const step = Math.floor(Math.random() * 10);

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
  const randomElement = arrayNumbers[Math.floor(Math.random() * arrayNumbers.length)];
  const result = String();
  const index = arrayNumbers.indexOf(randomElement);
  arrayNumbers.splice(arrayNumbers[index], 1, '..');
  const separator = ' ';
  const progression = arrayNumbers.join(separator).toString();
  const array = [`Question: ${progression}`, 'answer'];
  array[1] = result;
  return array;
};
