"use strict";
const mergeSort = function(aSortedLeft,aSortedRight)
{
  let vNewArray   = []
  let vLeftIndex  = 0
  let vRightIndex = 0
  for(let i = 0; i < aSortedLeft.length + aSortedRight.length ; i++)
  {
    if(vLeftIndex === aSortedLeft.length)
    {
      vNewArray.push(aSortedRight[vRightIndex])
      ++vRightIndex;
      continue;
    }
    if(vRightIndex === aSortedRight.length)
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