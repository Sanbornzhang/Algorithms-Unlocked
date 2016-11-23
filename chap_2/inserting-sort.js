"use strict";
const insertingSort = function(aArray)
{
  let resultArray = [...aArray]
  for(let j = 1; j < resultArray.length; j++)
  {
    let vChangeValue = resultArray[j]
    for( let k = j ; k >= 0 && resultArray[k] < resultArray[k-1] ; k--)
    {
      let i = k - 1
      resultArray[k] = resultArray[i]
      resultArray[i] = vChangeValue
    }
  }
  return resultArray;
}
module.exports = insertingSort;