import {
  taskForUser, getAnswer, checkAnswer,
} from '../cli.js';
import { getRandomInt, startGame } from '../index.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const rusPrimeGame = () => {
  startGame(() => {
    const number = getRandomInt(100);
    const result = isPrime(number) ? 'yes' : 'no';
    taskForUser('Answer "yes" if given number is prime. Otherwise answer "no".', number);
    const answerPrime = getAnswer().toLowerCase();
    return checkAnswer(answerPrime, result);
  });
};

export default rusPrimeGame;
