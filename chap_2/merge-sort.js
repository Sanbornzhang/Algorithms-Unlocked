"use strict";
const mergeSort = function(aSortedLeft,aSortedRight)
{
  if(aSortedLeft.length !== aSortedRight.length)
  {
    vError         = new Error();
    vError.message = 'Array length must be same';
    throw(vError)
  }
  // add key
  const vKey1 = aSortedLeft[aSortedLeft.length-1] * 10
  const vKey2 = aSortedRight[aSortedRight.length-1] * 10
  aSortedLeft.push(vKey1)
  aSortedRight.push(vKey2)

  let vNewArray   = []
  let vLeftIndex  = 0
  let vRightIndex = 0
  for(let i = 0; i < aSortedLeft.length + aSortedRight.length - 2 ; i++)
  {
    if(aSortedLeft[vLeftIndex] === vKey1)
    {
      vNewArray.push(aSortedRight[vRightIndex])
      ++vRightIndex;
      continue;
    }
    if(aSortedRight[vRightIndex] === vKey2)
    {
      vNewArray.push(aSortedLeft[vRightIndex])
      ++vLeftIndex;
      continue;
    }
    if(aSortedLeft[vLeftIndex] > aSortedRight[vRightIndex])
    {
      vNewArray.push(aSortedRight[vRightIndex])
      ++vRightIndex;
      continue;
    }
    vNewArray.push(aSortedLeft[vLeftIndex])
    ++vLeftIndex;
  }
  return vNewArray;
}
module.exports = mergeSort;