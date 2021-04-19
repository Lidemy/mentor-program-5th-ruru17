function printStars(n) {
  let result = ''
  let stars = ''
  let array = []
  for (var i=1 ; i <= n ; i++ ) {
    result += '*\n'
  }
  if (result.length > 60) {
    console.log("數字大於30，拒絕輸出")
    } else {
    console.log(stars+result)
    }
}

printStars(2)
