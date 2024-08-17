#!/usr/bin/env node
import readlineSync from 'readline-sync';
import * as math from 'mathjs';
import nameQuestion from '../src/cli.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isPrime = () => {
  const name = nameQuestion();
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Question: ${number}`);
    const answerEven = readlineSync.question('Your answer: ');
    const lowCase = answerEven.toLowerCase();
    if (math.isPrime(number) && lowCase === 'yes') {
      console.log('Correct!');
    } else if (!math.isPrime(number) && lowCase === 'no') {
      console.log('Correct!');
    } else {
      console.log(`${lowCase} is wrong answer ;(. Correct answer was ${(lowCase === 'yes') ? 'no' : 'yes'}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

isPrime();
