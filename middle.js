const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function(arr) {
  let midPoint = (arr.length / 2);
  let evenMidPoint = ((arr.length / 2) + 1);
  let midPointArray = [];

  //For arrays with odd number of elements, an array containing a single middle element should be returned.
  if (arr.length % 2 !== 0 && arr.length > 2) {
    midPointArray.push(Math.ceil(midPoint));
    return midPointArray;
    
  } if (arr.length % 2 === 0 && arr.length > 2) {
    //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    midPointArray.push(Math.ceil(midPoint));
    midPointArray.push(Math.ceil(evenMidPoint));
    return midPointArray;
  } 
    return midPointArray;
};

module.exports = middle;
