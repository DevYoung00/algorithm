const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

let find;
let array =[];
let num;
let inputData = [];
let input = [];
rl.on('line', function (line) {
  inputData.push(line.split(' ').map((x) => parseInt(x)));
  for(var i=0; i<inputData.length; i++){
    if(i===0){
      input = inputData[0];
      num = input[0];
      find = input[1];
    }
    else{
      input = inputData[1];
      for(var j=0; j<input.length; j++){
        array.push(input[j]);
      }
    }
  }
  

}).on('close', function () {

  var temp = 0;
  var count = 0;
  for(var i=0; i<num; i++){
    for(var j=0; j<num-1-i; j++){
      if(array[j]>array[j+1]){ 
        temp=array[j];
        array[j]=array[j+1];
        array[j+1] =temp;
        count = count + 1;
        if(count === find){
          console.log(array[j],array[j+1]);
          return 0;
        }
      }
      }
      
    
}
console.log(-1);
process.exit();

});