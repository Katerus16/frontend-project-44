import {
  getRandomInt, startGame,
} from '../index.js';

const rulesGame = 'What number is missing in the progression?';

const generateProgression = (startElement, step, size) => {
  let progressionNumber = startElement;
  const progressionArray = [];
  for (let j = 0; j < size; j += 1) {
    progressionNumber += step;
    progressionArray.push(String(progressionNumber));
  }
  return progressionArray;
};

const generateTask = () => {
  const startElement = getRandomInt(100);
  const step = getRandomInt(50);
  const size = getRandomInt(10) + 5;
  const questionElementIndex = getRandomInt(size);
  const progressionArray = generateProgression(startElement, step, size);
  const rightAnswer = progressionArray[questionElementIndex];
  progressionArray[questionElementIndex] = '..';
  const progression = progressionArray.join(' ');
  return {
    rightAnswer,
    task: progression,
  };
};

const missingNumber = () => {
  startGame(rulesGame, generateTask);
};

export default missingNumber;
