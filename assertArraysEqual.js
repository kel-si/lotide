const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  
  if (isEqual === true) {
    console.log('The arrays match!');
  } else {
    console.log('The arrays do not match.');
  }
};

module.exports = assertArraysEqual;
