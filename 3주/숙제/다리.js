const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});
let inputData =[];
let input = [];
let T;
let inputCount;

rl.on('line', function (line) {

  inputData.push(line.split(' ').map((x) => parseInt(x)));
  inputCount = inputData.length;
  T = inputData[0];
}).on('close', function () {
  function fac(n){
    if(n===1) {
      return 1;
    }
    return n * fac(n-1);
  }

  function comb(N,M){
    if(M===0 || M ===N){
      return 1;
    }
    return fac(N) / (fac(N-M) * fac(M)); 
   
  }

  var i = 1;
  while(i<inputCount){
    input = inputData[i];
    var a = input[0];
    var b = input[1];
     console.log(parseInt(comb(b,a)+0.5));
     i++;
  }
   process.exit();
});
