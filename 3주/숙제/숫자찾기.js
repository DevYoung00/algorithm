
const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});
let inputData = [];
let a;
let b;
let com = [];
rl.on('line', function (line) {
  inputData.push(line.split(' ').map((x) => parseInt(x)));
  a = inputData[0];
  b = inputData[2];
  com = inputData[3];
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
  com.forEach((el,i) =>{
    if(arr.has(el)){
      com[i] = arr.get(el);
    }
    else{
      com[i] = 0;
    }
  })

  console.log(com.join(" "));
   process.exit();
});