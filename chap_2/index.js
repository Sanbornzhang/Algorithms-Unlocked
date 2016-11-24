"use strict";
const diffResult    = require('./check-result')
const randomArray   = require('./randomArray')
const mergeSort     = require('./merge-sort')
const bubbleSort    = require('./bubble-sort')
const insertingSort = require('./inserting-sort')
const divideAndConquerP = require('./divide-and-conquerP')

const vArray = randomArray(100)
// console.log(vArray)
console.time("divideAndConquer")
divideAndConquerP(vArray).then((result)=>{console.timeEnd("divideAndConquer")})

console.time("insertingSort")
const insertingSortArray = insertingSort(vArray)
console.timeEnd("insertingSort")

console.time("bubbleSort")
const bubbleSortArray = bubbleSort(vArray)
console.timeEnd("bubbleSort")
// console.log(bubbleSortArray)
// diffResult(bubbleSortArray,insertingSortArray)
// const vMiddle     = Math.floor(vArray.length / 2);
// const vLeftArray  = vArray.slice(0, vMiddle);
// const vRightArray = vArray.slice(vMiddle);

// const vSortLeftArray  = insertingSort(vLeftArray)
// const vSortRightArray = insertingSort(vRightArray)
// const mergeSortArray  = mergeSort(vSortLeftArray,vSortRightArray)
