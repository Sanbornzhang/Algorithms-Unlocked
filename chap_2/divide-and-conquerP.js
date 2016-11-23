"use strict";
const mergeSort = require('./merge-sort')

const divideAndConquer = (aSortArray) =>
{
  const vSortArray = splitArray(aSortArray)
  let vLastOfArray = [];
  if(vSortArray.length % 2 !== 0)
  {
    vLastOfArray = vSortArray.pop()
  }
  return childProcess(vSortArray)
  .then((vSortedArray) =>
  {
    let vResult = []
    if(vLastOfArray.length)
    {
      vResult = mergeSort(vSortedArray[0],vLastOfArray);
    }
    else
    {
      vResult = vSortedArray[0];
    }
    return vResult;
  })
  .catch((error) =>
  {
    return [];
  })
}

const splitArray = (vArray) =>
{
  let resultArray = []
  for(let i =0; i < vArray.length; i++)
  {
    resultArray.push([vArray[i]])
  }
  return resultArray;
}

const mergeSortPromise = (aSortedLeft,aSortedRight) =>
{
  return new Promise((resolve,reject) =>
  {
    const result = mergeSort(aSortedLeft,aSortedRight)
    resolve(result);
  })
}
var splitAndSort = (aSortArray) =>
{
  let j = 0;
  let vPromiseList = []
  for(let i = 0; i < aSortArray.length / 2; i++)
  {
    vPromiseList.push(mergeSortPromise(aSortArray[j],aSortArray[++j]))
    ++j;
  }
  return Promise.all(vPromiseList)
}

const childProcess = (aSortArray) =>
{
  if(aSortArray.length === 1)
  {
    return Promise.resolve(aSortArray);
  }
  if(aSortArray.length % 2 !== 0)
  (
    aSortArray.push([])
  )
  return splitAndSort(aSortArray)
  .then((vSortArray) =>
  {
    return childProcess(vSortArray)
  })
}

module.exports = divideAndConquer;
