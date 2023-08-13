/*  
    Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
    Update the current existing inventory item quantities (in arr1). 
    If an item cannot be found, add the new item and quantity into the inventory array.
    The returned inventory array should be in alphabetical order by item.
*/

type UpdateInventory = Array<[number, string]>;

function updateInventory(
  currentInventory: UpdateInventory,
  newInventory: UpdateInventory
): UpdateInventory {
  for (const [qty, name] of newInventory) {
    const currentInventoryIndex = currentInventory.findIndex((x) => x[1] === name);

    if (currentInventoryIndex === -1) {
      currentInventory.push([qty, name]);
    } else {
      currentInventory[currentInventoryIndex][0] += qty;
    }
  }

  return currentInventory.sort((a, b) => a[1].localeCompare(b[1]));
}

// Example inventory lists
const curInv: UpdateInventory = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

const newInv: UpdateInventory = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

console.log(updateInventory(curInv, newInv));
