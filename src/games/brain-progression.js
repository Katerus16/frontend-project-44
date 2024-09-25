import {
  getRandomInt, startGame, taskForUser, getAnswer, checkAnswer,
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

const missingNumber = () => {
  startGame(() => {
    const startElement = getRandomInt(100);
    const step = getRandomInt(50);
    const size = getRandomInt(10) + 5;
    const questionElementIndex = getRandomInt(size);
    const progressionArray = generateProgression(startElement, step, size);
    const result = Number(progressionArray[questionElementIndex]);
    progressionArray[questionElementIndex] = '..';
    const progression = progressionArray.join(' ');
    taskForUser(rulesGame, progression);
    const answerExpression = Number(getAnswer());
    return checkAnswer(answerExpression, result);
  });
};

export default missingNumber;
