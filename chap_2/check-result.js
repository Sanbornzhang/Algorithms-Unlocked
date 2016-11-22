"use strict";
var diffResult = function(aSortedLeft,aSortedRight)
{
  for(let i = 0; i < aSortedLeft.length; i++)
  {
    if(aSortedLeft[i] !== aSortedRight[i])
    {
      vError         = new Error();
      vError.message = 'Array length must be same';
      throw(vError)
    }
  }
  console.info("Sort Successful");
}
module.exports = diffResult;