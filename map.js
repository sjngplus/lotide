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


const words = ["ground", "control", "to", "major", "tom"];

const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];


const map = function(array, callbackFunc) {
  const newArray = [];
  for (item of array) {
    newArray.push(callbackFunc(item));    
  }
  return newArray;
};

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // => true
assertArraysEqual(results1, ["ground"]); // => false
assertArraysEqual(map(lighthouses, word => word[0]), ["G", "P", "C", "D", "C", "P", "K"]); // => true
