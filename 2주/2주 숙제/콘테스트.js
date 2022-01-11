const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});
const a = [];
const b = [];
rl.on('line', function (line) {

		if(a.length<10){
			a.push(parseInt(line));
		}
		else{
			b.push(parseInt(line));
		}


}).on('close', function () {


	function sortSum(){
		for(var i = 0; i<10; i++){
			for(var j=i+1; j<10; j++){
				if(a[i] < a[j]){
					var tmp = a[j];
					a[j] = a[i];
					a[i] = tmp;
				}
			}
		}
		for(var i = 0; i<10; i++){
			for(var j=i+1; j<10; j++){
				if(b[i] < b[j]){
					var tmp = b[j];
					b[j] = b[i];
					b[i] = tmp;
				}
			}
	}
	console.log(a[0] + a[1] + a[2] ,b[0] + b[1] + b[2]);
	

	}
	sortSum();
	
   process.exit();
});