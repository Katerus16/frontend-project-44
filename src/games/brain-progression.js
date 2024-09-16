import {
  taskForUser, getAnswer, checkAnswer,
} from '../cli.js';
import { getRandomInt, startGame } from '../index.js';

const missingNumber = () => {
  startGame(() => {
    const startElement = getRandomInt(100);
    const step = getRandomInt(50);
    const size = getRandomInt(10) + 5;
    const questionElementIndex = getRandomInt(size);
    let progressionNumber = startElement;
    const progressionArray = [];
    for (let j = 0; j < size; j += 1) {
      progressionNumber += step;
      progressionArray.push(String(progressionNumber));
    }
    const result = Number(progressionArray[questionElementIndex]);
    progressionArray[questionElementIndex] = '..';
    const progression = progressionArray.join(' ');
    taskForUser('What number is missing in the progression?', progression);
    const answerExpression = Number(getAnswer());
    return checkAnswer(answerExpression, result);
  });
};

export default missingNumber;
