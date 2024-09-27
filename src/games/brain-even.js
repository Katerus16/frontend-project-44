import {
  getRandomInt, startGame,
} from '../index.js';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateTask = () => {
  const number = getRandomInt(100);
  const rightAnswer = isEven(number);
  return {
    rightAnswer,
    task: number,
  };
};

const runBrainEven = () => {
  startGame(rulesGame, generateTask);
};
export default runBrainEven;
