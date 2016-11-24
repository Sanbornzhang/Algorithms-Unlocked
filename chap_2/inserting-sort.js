"use strict";
const insertingSort = function(aArray)
{
  let resultArray = [...aArray]
  for(let j = 1; j < resultArray.length; j++)
  {
    let vChangeValue = resultArray[j]
    let vChangeIndex = j
    for( vChangeIndex = j ; vChangeIndex >= 0 && vChangeValue < resultArray[vChangeIndex-1] ; vChangeIndex--)
    {
      resultArray[vChangeIndex] = resultArray[vChangeIndex-1]
    }
    resultArray[vChangeIndex] = vChangeValue
  }
  return resultArray;
}
module.exports = insertingSort;