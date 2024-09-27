import {
  getRandomInt, startGame,
} from '../index.js';

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const generateTask = () => {
  const number = getRandomInt(100);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return {
    rightAnswer,
    task: number,
  };
};

const rusPrimeGame = () => {
  startGame(rulesGame, generateTask);
};

export default rusPrimeGame;
