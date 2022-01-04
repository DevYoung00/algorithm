const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

let inputData = [];
rl.on('line', function (line) {
  console.log(line)
  //여기 위치에서 전역변수 설정
  //inputData.push(line.split(' ').map(x=>parseInt(x)))

}).on('close', function () {
  //여기서 console 하기
  //const [[a],b,[c],d] = inputData;  => 가공 
   process.exit();
});