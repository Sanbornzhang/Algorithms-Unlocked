var startIndex  = 0
var searchIndex = 10000

var vArray      = []
for(var i=0;i<10000000;i++)
{
  vArray.push(i)
}
var linear_search1 = function(aArray,v){
  for(var i = 0;i < aArray.length;i++)
  {
    if(aArray[i] === v)
      return i
  }
  return -1
}
var linear_search2 = function(aArray,v){
  var vLen = aArray.length;
  var i    = 0;
  while(i < vLen)
  {
    if(aArray[i] == v)
      return i
    i++
  }
  return -1
}


//就没看懂这是什么意思！
// var linear_search3 = function(aArray, x) {
//   var i = 0;
//   var n = aArray.length;
//   var last = aArray[n - 1];
//   aArray[n = 1] = x;
//   if (aArray[i] !== x) {
//     i++;
//     aArray[n] = last;
//     if (i < n && (aArray[i] == x)) {
//       return i;
//     }
//   }
//   return -1;
// };

// var answer = linear_search3(vArray,'50000')
// console.log(answer)
// var vDate4 = new Date();
// var date=vDate4.getTime()-vDate3.getTime();
// console.log(date)

var FACTORIAL = function(n)
{
  if(n===0)
  {
    return 1
  }
 return n * FACTORIAL(n-1)
}
var BAD_FACTORIAL = function(n)
{
  if(n===0)
  {
    return 1
  }
 return BAD_FACTORIAL(n+1)/(n-1)
}
FACTORIAL(5)

var Lines_search_FACTORIAL = function(aArray,n,i,x)
{
  if(aArray[i] == x)
  {
    return i
  }
  if( i == n )
  {
    return -1
  }
  return Lines_search_FACTORIAL(aArray,n,(i+1),x)
}

var vDate = new Date();
var answer = linear_search1(vArray,searchIndex)
console.log(answer)
var vDate1 = new Date();
var date=vDate1.getTime()-vDate.getTime();
console.log(date)

var answer = linear_search2(vArray,searchIndex)
console.log(answer)
var vDate3 = new Date();
var date=vDate3.getTime()-vDate1.getTime();
console.log(date)

var vDate4 = new Date();
var answer = Lines_search_FACTORIAL(vArray,vArray.length,startIndex,searchIndex)
console.log(answer)
var vDate5 = new Date();
var date=vDate5.getTime()-vDate4.getTime();
console.log(date)
