import { askName } from './cli.js';

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const startGame = (gameFn) => {
  const name = askName();
  for (let i = 0; i < 3; i += 1) {
    const resultRunGame = gameFn();
    if (!resultRunGame) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
