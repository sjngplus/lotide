const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`☑️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(arr) {
  const newArr = arr.slice(1);
  return newArr;
};

const words = ["Yo Yo", 5, 6, "Lighthouse", "Labs", `test`];

console.log(tail(words));

console.log(words);