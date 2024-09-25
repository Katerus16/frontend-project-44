import {
  getRandomInt, startGame, taskForUser, getAnswer, checkAnswer,
} from '../index.js';

const rulesGame = 'Find the greatest common divisor of given numbers.';

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
    taskForUser(rulesGame, `${number1} ${number2}`);
    const answerExpression = Number(getAnswer());
    return checkAnswer(answerExpression, result);
  });
};

export default runSearchGcd;
