const assertEqual = require('./assertEqual')

const eqArrays = function(arr1, arr2) {
  let match;
  if (arr1.length === 0 && arr2.length === 0) {
    return true;
  }
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

module.exports = {
  eqArrays
};
