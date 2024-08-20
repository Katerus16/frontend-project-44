#!/usr/bin/env node
import readlineSync from 'readline-sync';
import nameQuestion from '../src/cli.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const primeGame = () => {
  const name = nameQuestion();
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Question: ${number}`);
    const answerEven = readlineSync.question('Your answer: ');
    const lowCase = answerEven.toLowerCase();
    if (isPrime(number) && lowCase === 'yes') {
      console.log('Correct!');
    } else if (!isPrime(number) && lowCase === 'no') {
      console.log('Correct!');
    } else {
      console.log(`${lowCase} is wrong answer ;(. Correct answer was ${(lowCase === 'yes') ? 'no' : 'yes'}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

primeGame();
