"use strict";
const insertingSort = function(aArray)
{
  for(let j = 1; j < aArray.length; j++)
  {
    let vChangeValue = aArray[j]
    for( let k = j ; k >= 0 && aArray[k] < aArray[k-1] ; k--)
    {
      let i = k - 1
      aArray[k] = aArray[i]
      aArray[i] = vChangeValue
    }
  }
  return aArray;
}
module.exports = insertingSort;