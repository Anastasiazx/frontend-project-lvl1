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

export const rules = () => {
  console.log('What is the result of the expression?');
};

export const calculate = () => {
  const number = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const count = `${number} ${operator} ${number2}`;
  const array = [`Question: ${count}`, 'answer'];
  const result = String(correctAnswer(number, number2, operator));
  array[1] = result;
  return array;
};
