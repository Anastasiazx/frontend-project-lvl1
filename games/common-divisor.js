const correctAnswer = (number, number2) => {
  let result;

  if (number === 0) {
    result = number2;
  }

  while (number2 !== 0) {
    if (number > number2) {
      result = number - number2;
    } if (number < number2) {
      result = number2 - number;
    }
  }
  return result;
};

export const rules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export const findDivisor = () => {
  const number = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const count = `${number} ${number2}`;
  const array = [`Question: ${count}`, 'answer'];
  const result = String(correctAnswer(number, number2));
  array[1] = result;
  return array;
};

findDivisor();
