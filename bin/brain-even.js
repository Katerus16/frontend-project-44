#!/usr/bin/env node
import readlineSync from 'readline-sync';
import nameQuestion from "../src/cli.js";

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isCorrect = () => {
  const name = nameQuestion();
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${number}`);
    const answerEven = readlineSync.question('Your answer: ');
    const lowCase = answerEven.toLowerCase();
    if (number % 2 === 0 && lowCase === 'yes') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && lowCase === 'no') {
      console.log('Correct!');
    }
    else {
      console.log(`${lowCase} is wrong answer ;(. Correct answer was ${(lowCase === 'yes') ? 'no' : 'yes'}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

isCorrect();
