import readlineSync from 'readline-sync';

export const getRandomInt = (max) => Math.floor(Math.random() * max);

const roundCount = 3;

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const answer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${answer}!`);
  return answer;
};

export const startGame = (gameFn) => {
  const name = askName();
  for (let i = 0; i < roundCount; i += 1) {
    const resultRunGame = gameFn();
    if (!resultRunGame) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export const taskForUser = (text, task) => {
  console.log(text);
  console.log(`Question: ${task}`);
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const checkAnswer = (userAnswer, rightAnswer) => {
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  return false;
};
