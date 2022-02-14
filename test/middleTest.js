const middle = require("../middle");
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);