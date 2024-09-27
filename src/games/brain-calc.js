import {
  getRandomInt, startGame,
} from '../index.js';

const rulesGame = 'What is the result of the expression?';

const calculateExpression = (number1, number2, operator) => {
  switch (operator) {
    case '-': return number1 - number2;
    case '+': return number1 + number2;
    case '*': return number1 * number2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const operatorArray = ['+', '-', '*'];

const getRandomOperator = () => {
  const number = getRandomInt(3);
  return operatorArray[number];
};

const generateTask = () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  const operator = getRandomOperator();
  const rightAnswer = calculateExpression(number1, number2, operator).toString();
  return {
    rightAnswer,
    task: `${number1} ${operator} ${number2}`,
  };
};

const runBrainCalc = () => {
  startGame(rulesGame, generateTask);
};

export default runBrainCalc;
