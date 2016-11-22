"use strict";
const mergeSort = function(aSortedArray1,aSortedArray2)
{
  let vNewArray = []
  const vKey1 = aSortedArray1[aSortedArray1.length-1] * 10
  const vKey2 = aSortedArray2[aSortedArray2.length-1] * 10
  aSortedArray1.push(vKey1)
  aSortedArray2.push(vKey2)
  for(let i = 0; i < aSortedArray1.length; i++)
  {
    if(aSortedArray1[i] === vKey1)
    {
      vNewArray
    }
  }
}
module.exports = mergeSort;