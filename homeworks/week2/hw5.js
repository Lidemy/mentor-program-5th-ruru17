/*助教好, 感謝您在week1 給我的用心回饋, 
第五題的第一個part 我真的寫不出來. 故未完成. */
/*function join(arr, concatStr) {
  var re = concatStr;
  for (var i = 0 ; i <= arr.length ; i++ ) {
    while ( i % 2 === 1) {
      var result = arr.replace(re, concatStr);
      }
    return result
    }
}
console.log(join(['a','b','c','d'], '!')); */


function repeat(str, times) {
  var result = ''
  for(var i=1; i<=times; i++) {
    var result = result += str
  }
  return result
}
console.log(repeat('a', 3));
