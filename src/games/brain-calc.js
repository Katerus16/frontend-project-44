#!/usr/bin/env node
import {
  nameQuestion, taskForUser, getAnswer, checkAnswer,
} from '../cli.js';
import { getRandomInt, getRandomOperator, calculateExpression } from '../index.js';

const resultExpression = () => {
  const name = nameQuestion();
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);
    const operator = getRandomOperator();

    const result = calculateExpression(number1, number2, operator);

    taskForUser('What is the result of the expression?', `${number1} ${operator} ${number2}`);

    const answerExpression = Number(getAnswer());
    if (!checkAnswer(answerExpression, result)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default resultExpression;
