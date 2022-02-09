const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️Assertion Failed:${actual} !== "${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function() {
  if (true) {
    console.log('The arrays match!');
  }

  if (false) {
    console.log('The arrays do not match. :(');
  }
}
console.log(assertArraysEqual(eqArrays([1,2,3],[1,2,3])));