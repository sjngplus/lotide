const eqArrays = require('./eqArrays').eqArrays
const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = {
  middle
};

