import {
  taskForUser, getAnswer, checkAnswer,
} from '../cli.js';
import { getRandomInt, startGame } from '../index.js';

const calculateExpression = (number1, number2, operator) => {
  switch (operator) {
    case '-': return number1 - number2;
    case '+': return number1 + number2;
    case '*': return number1 * number2;
    default: return undefined;
  }
};

const getRandomOperator = () => {
  const number = getRandomInt(3);
  switch (number) {
    case 0: return '+';
    case 1: return '-';
    case 2: return '*';
    default: return undefined;
  }
};

const runBrainCalc = () => {
  startGame(() => {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);
    const operator = getRandomOperator();
    const result = calculateExpression(number1, number2, operator);
    taskForUser('What is the result of the expression?', `${number1} ${operator} ${number2}`);
    const answerExpression = Number(getAnswer());
    return checkAnswer(answerExpression, result);
  });
};

export default runBrainCalc;
