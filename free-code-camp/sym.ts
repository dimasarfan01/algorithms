/*
The mathematical term symmetric difference (△ or ⊕) of two sets is 
the set of elements which are in either of the two sets but not in both. 
For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements.
 So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), 
 you must complete one operation at a time. Thus, for sets A and B above, 
 and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
*/

type SymArgs = Array<number[]>;

function sym(...args: SymArgs) {
  const result = new Set<number>();

  for (const arg of args) {
    const uniqueArg = new Set(arg);

    for (const item of uniqueArg) {
      if (result.has(item)) {
        result.delete(item);
      } else {
        result.add(item);
      }
    }
  }

  return Array.from(result.values()).sort();
}

// function sym(...args) {
//   const result = new Map();

//   args.forEach((items, itemsIndex) => {
//     items.forEach((item) => {
//       const currentKey = `${itemsIndex}-${item}`;
//       const previousKey = `${itemsIndex - 1}-${item}`;

//       if (result.has(previousKey)) {
//         result.delete(previousKey);
//       } else if (result.has(currentKey)) {
//       } else {
//         result.set(currentKey, item);
//       }
//     });
//   });

//   return [...result.values()];
// }
