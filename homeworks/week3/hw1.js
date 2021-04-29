var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});

var lines = []

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
    solve(lines)
  })
var lines = []
function star(n) {
    let result =''
    if (n === 0) {
        return true
    }
    for (let i = 1; i <= n; i += 1) {
     result += '*'
    }
    return result
}

function solve(lines) {
    let result =''
    let n = Number(lines[0])
    for (let i = 1; i <= n; i += 1) {
     result += star(i)
     if (i !== n) {
      result += '\n'
     }
    }
    console.log(result)
   }