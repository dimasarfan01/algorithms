/*
Problem 4: Largest palindrome product
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function isPalindrome(n: number) {
  const reverseNumberStr = n.toString().split('').reverse().join('');
  const numberStr = n.toString();

  if (numberStr.localeCompare(reverseNumberStr) === 0) {
    return true;
  } else {
    return false;
  }
}

function largestPalindromeProduct(n: number) {
  const numberDigit = Number('9'.repeat(n));
  const startLoopNumber = Number('9' + '0'.repeat(n - 1)); // improve looping

  let result = 0;

  for (let i = startLoopNumber; i <= numberDigit; i++) {
    for (let j = startLoopNumber; j <= numberDigit; j++) {
      const multiple = i * j;

      if (isPalindrome(multiple)) {
        if (multiple > result) {
          result = multiple;
        }
      }
    }
  }

  return result;
}

console.log(largestPalindromeProduct(2)); // should return 9009;
console.log(largestPalindromeProduct(3)); // should return 906609;
