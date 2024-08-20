#!/usr/bin/env node
import readlineSync from 'readline-sync';
import nameQuestion from '../src/cli.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

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
    const result = progressionArray[questionElementIndex];
    progressionArray[questionElementIndex] = '..';
    const progression = progressionArray.join(' ');
    console.log('What number is missing in the progression?');
    console.log(`Question: ${progression}`);
    const answerExpression = readlineSync.question('Your answer: ');
    if (Number(answerExpression) === Number(result)) {
      console.log('Correct!');
    } else {
      console.log(`${answerExpression} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

missingNumber();
