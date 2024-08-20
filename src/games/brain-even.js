#!/usr/bin/env node
import {
  nameQuestion, taskForUser, getAnswer, checkAnswer,
} from '../cli.js';
import { getRandomInt } from '../index.js';

const evenGame = () => {
  const name = nameQuestion();
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    const rightAnswer = number % 2 === 0 ? 'yes' : 'no';

    taskForUser('Answer "yes" if the number is even, otherwise answer "no".', number);

    const answerEven = getAnswer().toLowerCase();

    if (!checkAnswer(answerEven, rightAnswer)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default evenGame;
