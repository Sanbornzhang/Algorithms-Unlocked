"use strict";

const getArray = function (aLength)
{
  const vLength = aLength || 1000
  let vArray = [];
  for(let i = 1; i <= vLength ; i++)
  {
    vArray.push(i)
  }
  return vArray;
}

const randomArray = function (aLength)
{
  let vRandomArray = [];
  const vLength    = aLength || 1000;
  const vArrayList = getArray(vLength);
  for(let i = 0; i < vLength ; i++)
  {
    let vIndex  = Math.ceil(Math.random() * (vLength - 1));
    vRandomArray.push(vArrayList[vIndex])
  }
  return vRandomArray;
}
module.exports = randomArray;