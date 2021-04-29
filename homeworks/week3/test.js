function star(n) {
    let result =''
    for (let i = 1; i <= n; i += 1) {
     result += '*'
    }
    return result
   }
function markStars(n) {
    let result =''
    for (let i = 1; i <= n; i += 1) {
     result += star(i)
     if (i !== n){
      result += '\n'
     }
    }
    return result
   }
console.log(markStars(1))