/*function join(arr, concatStr) {
  for (var i = 0 ; i <= arr.length ; i++ ) {
    if ( i % 2 === 1) {
      /*arr.splice( arr[i], 0 , concatStr );
      var result = arr[i] + concatStr
      }
    return result
    }
}

console.log(join(['a','b','c'], '!')); */


function repeat(str, times) {
  var result = ''
  for(var i=1; i<=times; i++) {
    var result = result += str
  }
  return result
}
console.log(repeat('yoyo', 2));
