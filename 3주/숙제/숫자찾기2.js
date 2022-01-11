
const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});


let inputData = [];
rl.on('line', function (line) {
  inputData.push(line.split(' ').map((x) => parseInt(x)));
  a = inputData[0];
  b = inputData[2];
}).on('close', function () {
  let arr=[];
  for(var i=0; i<a; i++){
    var input = inputData[1];
    arr.push(input[i]);
  }
  let com = [];
  for(var i=0; i<b; i++){
    var input = inputData[3];
    com.push(input[i]);
  }
  arr.sort(function(n,m){
    return n-m;
  })

    function findLower(n){
    var low = 0;
    var high = a-1;
    while(low<=high){
      var mid = (low+high)/2;
      if(arr[mid]>=n){ //같을때도 포함!!!!
        high = mid-1;
      }
      else if(arr[mid]<n){
        low = mid + 1;
      }
    }
    return low;
  }


  function findUpper(n){
    
    var low = 0;
    var high = a-1;
    while(low<=high){
      var mid = (low+high)/2;
      if(arr[mid]>n){ 
        high = mid-1;
      }
      else if(arr[mid]<=n){
        low = mid + 1;
      }
  }
  return low;
}

  for(var i=0; i<b; i++){
    var ans = findUpper(com[i]) - findLower(com[i])
    console.log(ans );
  }
   process.exit();
});