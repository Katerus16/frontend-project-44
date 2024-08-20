#!/usr/bin/env node
import readlineSync from 'readline-sync';
import nameQuestion from '../src/cli.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);
const getRandomOperator = () => {
  const number = getRandomInt(3);
  switch (number) {
    case 0: return '+';
    case 1: return '-';
    case 2: return '*';
    default: return undefined;
  }
};

const calculateExpression = (number1, number2, operator) => {
  switch (operator) {
    case '-': return number1 - number2;
    case '+': return number1 + number2;
    case '*': return number1 * number2;
    default: return undefined;
  }
};

const resultExpression = () => {
  const name = nameQuestion();
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);
    const operator = getRandomOperator();
    console.log('What is the result of the expression?');
    console.log(`Question: ${number1} ${operator} ${number2}`);
    const answerExpression = readlineSync.question('Your answer: ');
    const result = calculateExpression(number1, number2, operator);
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

resultExpression();
