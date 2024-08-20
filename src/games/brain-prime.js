#!/usr/bin/env node
import {
  nameQuestion, taskForUser, getAnswer, checkAnswer,
} from '../cli.js';
import { getRandomInt, isPrime } from '../index.js';

const primeGame = () => {
  const name = nameQuestion();
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);

    const result = isPrime(number) ? 'yes' : 'no';

    taskForUser('Answer "yes" if given number is prime. Otherwise answer "no".', number);
    const answerPrime = getAnswer().toLowerCase();
    if (!checkAnswer(answerPrime, result)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default primeGame;
