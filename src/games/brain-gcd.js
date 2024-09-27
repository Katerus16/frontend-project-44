import {
  getRandomInt, startGame,
} from '../index.js';

const rulesGame = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const generateTask = () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  const rightAnswer = gcd(number1, number2).toString();
  return {
    rightAnswer,
    task: `${number1} ${number2}`,
  };
};

const runSearchGcd = () => {
  startGame(rulesGame, generateTask);
};

export default runSearchGcd;
