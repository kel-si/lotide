const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
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
    console.log('The arrays do not match.');
  }
};

const letterPositions = function(sentence) {
  const results = {};
  //loop through a string, ignoring spaces
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;

assertArraysEqual(letterPositions('hello').l,[2, 3]);