/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters.
 Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
 but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

function swap(index1: number, index2: number, arr: string[]) {
  let tmp: string;

  tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
}

function mutationStr(n: number, a: string[], result: string[]) {
  if (n === 1) {
    result.push(a.join(''));
  } else {
    for (let i = 0; i < n - 1; i++) {
      mutationStr(n - 1, a, result);
      if (n % 2 === 0) {
        swap(i, n - 1, a);
      } else {
        swap(0, n - 1, a);
      }
    }
    mutationStr(n - 1, a, result);
  }

  return result;
}

function isRepeatedLetter(str: string) {
  const splitStr = str.split('');

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === splitStr[i + 1]) {
      return true;
    } else {
      continue;
    }
  }

  return false;
}

function permAlone(str: string): number {
  let result = 0;
  const mutationArr: string[] = [];

  mutationStr(str.length, str.split(''), mutationArr);

  mutationArr.forEach((letter) => {
    const compare = isRepeatedLetter(letter);

    if (!compare) {
      result += 1;
    }
  });

  return result;
}

function permAlone2(str: string) {
  var strLen = str.length;

  var arr = str.split('');

  var c: number[] = [];

  var counter = 0;

  for (var i = 0; i < strLen; i++) {
    c[i] = 0;
  }

  //Check the 1st string for repeated consecutive characters.
  if (!/(.)\1+/g.test(str)) counter += 1;

  // Generate arrays of permutations using the Heap’s non-recursive algorithm.
  //https://en.wikipedia.org/wiki/Heap%27s_algorithm
  var i = 0;
  while (i < strLen) {
    if (c[i] < i) {
      if (i % 2 === 0) swap(0, i, arr);
      else swap(c[i], i, arr);
      //Check repeated consecutive characters and increment the counter for unique strings.
      if (!/(.)\1+/g.test(arr.join(''))) counter += 1;
      c[i] += 1;
      i = 0;
    } else {
      c[i] = 0;
      i += 1;
    }
  }
  return counter;
}

console.log(permAlone2('abfdefa'));
