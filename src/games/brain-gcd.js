#!/usr/bin/env node
import {
  nameQuestion, taskForUser, getAnswer, checkAnswer,
} from '../cli.js';
import { getRandomInt, gcd } from '../index.js';

const searchGcd = () => {
  const name = nameQuestion();
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);

    const result = gcd(number1, number2);

    taskForUser('Find the greatest common divisor of given numbers.', `${number1} ${number2}`);

    const answerExpression = Number(getAnswer());
    if (!checkAnswer(answerExpression, result)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default searchGcd;
