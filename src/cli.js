import readlineSync from 'readline-sync';

export const askName = () => {
  console.log('Welcome to the Brain Games!');
  const answer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${answer}!`);
  return answer;
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
