
const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});
let inputData = [];
let a;
let b;
rl.on('line', function (line) {
  inputData.push(line.split(' ').map((x) => parseInt(x)));
  a = inputData[0];
  b = inputData[2];
}).on('close', function () {
  arr = new Map();
  for(var i=0; i<a; i++){
    var input = inputData[1];
    var n = input[i];
    if(arr.has(n)){
      var x = arr.get(n);
      x++;
     arr.set(n,x);
    }
    else{
      arr.set(n,1);
    }
  }
  for(var i=0; i<b; i++){
    var input = inputData[3];
    var x = input[i];
    if(arr.has(x)){
      console.log(arr.get(x));
    }
    else console.log(0);
  }
   process.exit();
});