

function solution ( n ) {
  const array = [];
  for(i=1; i<=100; i++){
    array.push(i);
  }
  function search(y){
    if(y[0]===n){
      return n;
    }
    const idx = Math.floor(array.length/2)
    if(y[idx]<=n){
      return search(y.slice(idx));
    }
    else{
      return search(y.slice(0,idx));
    }
  };
  search(array);

}

solution(2);
