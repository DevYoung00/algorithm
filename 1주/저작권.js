const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input = line.split(' ');
  var a = parseInt(input[0]);
  var b = parseInt(input[1]);
  console.log(a * (b-1)+1);

}).on('close', function () {

   process.exit();
});

// a,b입력받고
// a * (b-1)+1 출력