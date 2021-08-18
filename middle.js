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

const middle = function(array) {    
  const midArray = [];
  if (array.length <= 2) {
    return midArray;
  }
  let midPoint = array.length / 2;  
  if (midPoint % 1 === 0) {
    midArray.push(array[midPoint - 1]);
    midArray.push(array[midPoint]);
    return midArray;
  } else {
    midArray.push(array[midPoint - 0.5])
    return midArray;
  }
};


//Test Cases:
console.log(middle([])); // => []
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6, 1, 2, 3, 4])); // => [5, 6]
console.log(middle([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 9])); // => [6]