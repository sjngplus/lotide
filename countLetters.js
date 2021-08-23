const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`☑️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (string) {
  const result = {};  
  for (const letter of string) {
    if(letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }    
    }
  }
  return result;
};

module.exports = countLetters;

console.log(countLetters("lighthouse in the house"));
/*
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/
