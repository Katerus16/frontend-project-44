import {
  getRandomInt, startGame, taskForUser, getAnswer, checkAnswer,
} from '../index.js';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const runBrainEven = () => {
  startGame(() => {
    const number = getRandomInt(100);
    const rightAnswer = isEven(number);
    taskForUser(rulesGame, number);
    const answerEven = getAnswer().toLowerCase();
    return checkAnswer(answerEven, rightAnswer);
  });
};
export default runBrainEven;
