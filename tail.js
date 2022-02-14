const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let tailArray = arr.slice(1);
  return tailArray;
};

module.exports = tail;