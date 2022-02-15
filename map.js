const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
};

module.exports = map;

// const mapFunc = word => word[0];

// const results1 = map(words, mapFunc);
// console.log(results1);