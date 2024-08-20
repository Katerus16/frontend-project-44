#!/usr/bin/env node
import {
  nameQuestion, taskForUser, getAnswer, checkAnswer,
} from '../cli.js';
import { getRandomInt } from '../index.js';

const missingNumber = () => {
  const name = nameQuestion();
  for (let i = 0; i < 3; i += 1) {
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
    if (!checkAnswer(answerExpression, result)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default missingNumber;
