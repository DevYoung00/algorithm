
const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

let inputData = [];
let a;
let b;
rl.on('line', function (line) {
  inputData.push(line.split(' ').map((x) => x));
  var input = [];
  input = inputData[0];
  a=input[0];
  b=input[1];

}).on('close', function () {

  let pok = new Map();
  let pok2 = new Map();
  let len = inputData.length;
  let qus = [];
      for (var i = 1; i <len; i++) {
        if(i<=a){
          pok.set(i,inputData[i]);
          pok2.set(inputData[i].toString(),i);
        }
        else{
          qus.push(inputData[i]);

        }
    }
    for(var j=0; j<b; j++){
      if(isNaN(qus[j])){
        //숫자아닐때
        console.log(parseInt(pok2.get(qus[j].toString())));
    
      }
      else{
        //숫자일때
        console.log((pok.get(parseInt(qus[j]))).toString());
        
      }
     
      }



   process.exit();
});