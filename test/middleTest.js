const middle = require("../middle");
const assert = require('chai').assert;

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