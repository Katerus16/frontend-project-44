#!/usr/bin/env node
import readlineSync from 'readline-sync';
import * as math from 'mathjs';
import nameQuestion from '../src/cli.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const searchGcd = () => {
  const name = nameQuestion();
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);
    console.log('Find the greatest common divisor of given numbers.');
    console.log(`Question: ${number1} ${number2}`);
    const answerExpression = readlineSync.question('Your answer: ');
    const result = math.gcd(number1, number2);
    if (Number(answerExpression) === result) {
      console.log('Correct!');
    } else {
      console.log(`${answerExpression} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

searchGcd();
