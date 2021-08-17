const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`☑️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }

};

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


console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
