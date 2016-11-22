"use strict";
const randomArray   = require('./randomArray')
const insertingSort = require('./inserting-sort')

const vArray = randomArray(100)
console.time("insertingSort")
const insertingSortArray = insertingSort(vArray)
console.timeEnd("insertingSort")
