const bubbleSort = function(aArray) {
  let resultArray = [...aArray]
  for(let i = 0; i < resultArray.length; i++)
  {
    // console.log("excute: ",i)
    for(let j = 0; j < i  && i >= 1; j++)
    {
      // console.log("excute loop j:",j)
      if(resultArray[j] > resultArray[i])
      {
        let vChangeNumber = resultArray[j]
        resultArray[j]    = resultArray[i]
        resultArray[i]    = vChangeNumber
      }
      // console.log(resultArray)
    }
  }
  return resultArray;
}
module.exports = bubbleSort;