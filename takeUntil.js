const eqArrays = function(arr1, arr2) {
  let match;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      let match = false;
      return match;
    } else {
      match = true;
    }
  }
  return match;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log(`☑️  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⚠️  Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const takeUntil = function(array, callbackFunc) {
  const resultArray = [];
  for (const item of array) {
    if (callbackFunc(item)) {
      return resultArray;
    } else {
      resultArray.push(item);
    }
  }
  return resultArray;
};

module.exports = takeUntil;
  

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I've', 'been', 'to', 'Hollywood' ]

assertArraysEqual(results1, [1, 2, 5, 7, 2]); // => true
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]); // => true
