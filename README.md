# Lotide
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kel-si/lotide`

**Require it:**

`const _ = require('@kel-si/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* [assertArraysEqual()](https://github.com/kel-si/lotide/blob/main/assertArraysEqual.js): asserts that two arrays are equal; used with eqArrays
* [assertEqual()](https://github.com/kel-si/lotide/blob/main/assertEqual.js): asserts that two inputs are equal
* [assertObjectsEqual()](https://github.com/kel-si/lotide/blob/main/assertObjectsEqual.js): asserts two objects are equal
* [countLetters()](https://github.com/kel-si/lotide/blob/main/countLetters.js): counts the number of letters in a given string while ignoring spaces
* [countOnly()](https://github.com/kel-si/lotide/blob/main/countOnly.js): counts specific items
* [eqArrays()](https://github.com/kel-si/lotide/blob/main/eqArrays.js): checks if two arrays are equal (returns true or false)
* [eqObjects()](https://github.com/kel-si/lotide/blob/main/eqObjects.js): checks if two objects are equal; used with eqArrays and eqObjects
* [findKey()](https://github.com/kel-si/lotide/blob/main/findKey.js): find key of a given value
* [findKeyByValue()](https://github.com/kel-si/lotide/blob/main/findKeyByValue.js): returns the first key which contains a given value
* [head()](https://github.com/kel-si/lotide/blob/main/head.js): returns the first item in an array
* [letterPosition()](https://github.com/kel-si/lotide/blob/main/letterPositions.js): returns the index of a given letter
* [map()](https://github.com/kel-si/lotide/blob/main/map.js): returns the first letter of each string given in an array
* [middle()](https://github.com/kel-si/lotide/blob/main/middle.js): returns the middle elements of an array or an empty array
* [tail()](https://github.com/kel-si/lotide/blob/main/tail.js): returns everything after the first element in an array
* [takeUntil()](https://github.com/kel-si/lotide/blob/main/takeUntil.js): returns the elements in an array until it reaches a condition given
* [without()](https://github.com/kel-si/lotide/blob/main/without.js): returns an array with only elements from the source that are not present in the itemsToRemove array

