const eqArrays = require('../eqArrays').eqArrays;
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);