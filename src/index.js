export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const getRandomOperator = () => {
  const number = getRandomInt(3);
  switch (number) {
    case 0: return '+';
    case 1: return '-';
    case 2: return '*';
    default: return undefined;
  }
};

export const calculateExpression = (number1, number2, operator) => {
  switch (operator) {
    case '-': return number1 - number2;
    case '+': return number1 + number2;
    case '*': return number1 * number2;
    default: return undefined;
  }
};

export const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
