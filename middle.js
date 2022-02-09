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

const middle = function(arr) {
  let midPoint = (arr.length/2);
  let evenMidPoint = ((arr.length/2) +1);
  let midPointArray = [];

  //For arrays with odd number of elements, an array containing a single middle element should be returned.
  if (arr.length % 2 !== 0 && arr.length >2) {
    midPointArray.push(Math.ceil(midPoint));
    return midPointArray;
    
  } else if (arr.length % 2 === 0 && arr.length >2) {
    //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    midPointArray.push(Math.ceil(midPoint));
    midPointArray.push(Math.ceil(evenMidPoint));
    return midPointArray;
  } else {
    return midPointArray;
    }
};

console.log(middle([1,2,3,4,5,6,7,8]));
console.log(middle([1,2,3,4,5]));
console.log(middle([]));
console.log(middle([1,2]));





// arrays with one or two elements, there is no middle. Return an empty array.

