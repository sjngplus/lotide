const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`☑️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function (object, valueToFind) {
  const keysArray = Object.keys(object);
  for (const key of keysArray) {    
    if (object[key] === valueToFind) {
      return key;
    }
  }
};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  cartoon: "Avatar The Last Airbender"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Avatar The Last Airbender"),"cartoon");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
