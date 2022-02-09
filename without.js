const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  if (isEqual === true) {
    console.log('The arrays match!');
  } else {
    console.log('The arrays do not match.')
  }
};

const without = function(source, itemsToRemove) {
  const removedItems = [];
  for (let i = 0; i < source.length; i++) {
    if(!itemsToRemove.includes(source[i])) {
      removedItems.push(source[i])
    }
  }
  return removedItems;
};
console.log(without([1, 2, 3, "3"], [1, "3"])); //[2, 3]




//This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.