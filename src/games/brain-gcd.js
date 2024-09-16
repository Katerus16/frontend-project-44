import {
  taskForUser, getAnswer, checkAnswer,
} from '../cli.js';
import { getRandomInt, startGame } from '../index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const runSearchGcd = () => {
  startGame(() => {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);
    const result = gcd(number1, number2);
    taskForUser('Find the greatest common divisor of given numbers.', `${number1} ${number2}`);
    const answerExpression = Number(getAnswer());
    return checkAnswer(answerExpression, result);
  });
};

export default runSearchGcd;
