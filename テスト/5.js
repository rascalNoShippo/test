function barabara(n){
  var count = 0;
  
  while(String(n).length > 1){
    var digs = String(n).split("").map(x=>+x);
    var n = 1;
    for(const dig of digs){
      n *= dig;
    }
		count++;
  }
  
  return count;
}

var count =0;
for(let i=1;i<=1000000;i++){
  if(barabara(i)==5)count++;
}

console.log(count)