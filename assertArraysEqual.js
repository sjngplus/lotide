const eqArrays = require('./eqArrays').eqArrays

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log(`☑️  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⚠️  Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS


module.exports = assertArraysEqual;