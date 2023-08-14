/*
    The prime factors of 13195 are 5, 7, 13 and 29.

    What is the largest prime factor of the given number?
*/

function isPrimeNumber(n: number) {
  if (n === 2 || n === 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  } else {
    return true;
  }
}

function largestPrimeFactor(number: number) {
  let result: number = 0;
  let totalMultiplePrimeNumber: number = 1;

  for (let i = 2; totalMultiplePrimeNumber !== number; i++) {
    if (isPrimeNumber(i)) {
      if (number % i === 0) {
        totalMultiplePrimeNumber *= i;

        result = i;
      }
    }
  }

  return result;
}

console.log(largestPrimeFactor(600851475143));
