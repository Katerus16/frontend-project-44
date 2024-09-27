import readlineSync from 'readline-sync';

export const getRandomInt = (max) => Math.floor(Math.random() * max);

const roundCount = 3;

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const answer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${answer}!`);
  return answer;
};

export const startGame = (rulesGame, gameFn) => {
  const name = askName();
  for (let i = 0; i < roundCount; i += 1) {
    const exercise = gameFn();
    console.log(rulesGame);
    console.log(`Question: ${exercise.task}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if (answer === exercise.rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${exercise.rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
