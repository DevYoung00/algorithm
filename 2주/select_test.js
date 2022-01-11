function solution ( n ) {
  for(var i=0; i<n.length-1; i++){
    let idx = i;
    for(var j=i; j<n.length; j++){
      if(n[idx]>n[j]){
        idx = j;
   
      }
    }
    let temp=n[idx];
    n[idx] = n[i];
    n[i] = temp;
    
  }

  console.log(n);
}
solution([1,3,5,7,4,9,6,2,8]);
