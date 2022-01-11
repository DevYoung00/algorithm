function solution(n, lost, reserve) {
  let answer = n-lost.length;
  for(var i=0; i<lost.length; i++){
      for(var j=0; j<reserve.length; j++){
          if(lost[i] === reserve[j]){
            reserve.splice(j,1);
            answer++;           
              // delete lost[j];
              break;
          }
          else{
            if(lost[i]-1===reserve[j]){
              answer++;
              reserve.splice(j,1);       
              break;
          }
          else if(lost[i]+1 === reserve[j]){
              answer++;
              reserve.splice(j,1);       
              break;
          }
          }

      }
  }
  console.log(answer);
  
}
solution(	5, [2, 4], [2]);