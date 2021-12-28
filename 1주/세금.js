const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input = line.split(' ');
  var n = parseInt(input[0]);
  var case1 = (n- (n*0.22));
  var case2 = n*0.8 + ((n*0.2) - (n*0.2) * 0.22);
  console.log(case1);
  console.log(case2);

}).on('close', function () {

   process.exit();
});