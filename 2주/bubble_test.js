function solution ( n ) {
  answer = [];
  var temp = 0;
  for(var j=n.length; j>=0; j--){
    for(var i=n.length; i>=0; i--){
      if(n[i]>n[i+1]){
        temp=n[i]
        n[i]=n[i+1]
        n[i+1] =temp
      }
      }
  }
  answer = n;
  console.log(answer);
}

const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

let information = [];
let inputData = [];
rl.on('line', function (line) {

}).on('close', function () {

   process.exit();
});



