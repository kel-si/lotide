const middle = require("../middle");
// const eqArrays = require("../eqArrays");
// const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([1, 2]), []);

describe("#middle", () => {
  it("returns an empty array when given an array with only two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns the middle two elements with an array containing an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns the middle element with an array containing an odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
});