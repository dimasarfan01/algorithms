/*
Problem 1: Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function multiplesOf3and5(num: number) {
  let result: number = 0;

  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
}

console.log(multiplesOf3and5(49)); // should return 543.
console.log(multiplesOf3and5(1000)); // should return 233168.
