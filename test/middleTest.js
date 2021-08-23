const middle = require('../middle').middle;

const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(middle([2, 3, 4]), [3]);
assertArraysEqual(middle([1]), []);
// console.log(middle([1, 2])); // => []

// assertEqual((middle([1, 2, 3])); // => [2]
// cassertEqual((middle([1, 2, 3, 4, 5])); // => [3]

// assertEqual((middle([1, 2, 3, 4])); // => [2, 3]
// assertEqual((middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// assertEqual((middle([1, 2, 3, 4, 5, 6, 1, 2, 3, 4])); // => [5, 6]
// assertEqual((middle([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 9])); // => [6]