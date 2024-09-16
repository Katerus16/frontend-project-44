import {
  taskForUser, getAnswer, checkAnswer,
} from '../cli.js';
import { getRandomInt, startGame } from '../index.js';

const runBrainEven = () => {
  startGame(() => {
    const number = getRandomInt(100);
    const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
    taskForUser('Answer "yes" if the number is even, otherwise answer "no".', number);
    const answerEven = getAnswer().toLowerCase();
    return checkAnswer(answerEven, rightAnswer);
  });
};
export default runBrainEven;
