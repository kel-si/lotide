const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️Assertion Failed:${actual} !== "${expected}`);
  }
};

//should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(obj, value) {
  for (const key of Object.keys(obj)) {
    const objValue = obj[key];
    if (objValue === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// assertEqual(findKeyByValue(myMonster, "turn to stone"), "power");
// assertEqual(findKeyByValue(myMonster, "fire"), undefined);