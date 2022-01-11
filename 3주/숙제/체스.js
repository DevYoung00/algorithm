const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});


let inputData = [];
let info = [];
let a;
let b;

rl.on('line', function (line) {
  inputData.push(line.split(' ').map((x) => parseInt(x)));
  info.push(line);
  input = inputData[0];
  a = input[0];
  b = input[1];


  
}).on('close', function () {
  let bef = [];
  let min = [];
  for(var i=0; i<a; i++){
    bef.push(info[i+1]);
  }
  for(var k=0; k<a-7; k++){ // 행시작점
    for(var l=0; l<b-7; l++){ // 열시작점
      var WS = 0;
      var BS = 0;
      for(var i=k; i<k+8; i++){//행시작점을 기준으로 8개
        for(var j=l; j<l+8; j++){//열시작점을 기준으로 8개
          if((i+j) % 2 == 0){
            if(bef[i][j] != 'W'){
              WS = WS + 1;
            }
            if(bef[i][j] != 'B'){
              BS = BS + 1;
            }
          }
          else{
            if(bef[i][j] != 'B'){
              WS = WS + 1;
            }
            if(bef[i][j] != 'W'){
              BS = BS + 1;
            }
          }
        }
      }
      min.push(WS);
      min.push(BS);

    }
  }
  var ans = Math.min.apply(null,min);
  console.log(ans);
   process.exit();
});