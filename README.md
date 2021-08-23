# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sj_ngnpm/lotide`

**Require it:**

`const _ = require('@sj_ngnpm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

head: returns the first element in an array.
tail: returns all elements after the first element.
middle: returns the middle element or the average of the middle elements if an array has an even number of elements.
countLetters,
countOnly,
findKey,
findKeyByValue,
flatten,
letterPositions,
map,
takeUntil,
without

* `head(Array)`: Returns the first element in the array.
* `tail(Array)`: Return the last element in the array.
* `Middle(Array)`: Returns the middle element in an array with odd number of elements, or returns the average of the two middle elements in an array with an even number of elements.

### Remaining functions are a lite version of the functions found in the lodash library:
* `countLetters()`
* `countOnly()`
* `findKey()`
* `findKeyByValue()`
* `flatten()`
* `letterPositions()`
* `map()`
* `takeUntil()`
* `without()`