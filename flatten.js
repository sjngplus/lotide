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


const flatten = function(nestedArrays) {
  let newArray = [];
  return(recursiveFlatten(nestedArrays, newArray));  
};

const recursiveFlatten = function(nestedArrays, newArray) {  
  for (let i = 0; i < nestedArrays.length; i++) {
    if(!Array.isArray(nestedArrays[i])) {
      newArray.push(nestedArrays[i]);
    } else {
      let innerArray = nestedArrays[i]      
      recursiveFlatten(innerArray, newArray);
    }
  }
  return newArray;
};

module.exports = flatten;

console.log(flatten([1, 2, [3, [3.2, [3.24, 3.26, 3.28], 3.6, 3.8], 4], 5, [6, [7, 8, 9]]])); // => [1, 2, 3, 4, 5, 6]


