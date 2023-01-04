function is3teki(n){
  var jouken1 = n % 3 == 0
  var jouken2 = String(n).length == 3;
  var jouken3 = String(n).match(/3/g) !== null;
  
  return jouken1||jouken2||jouken3;
}


var sum = 0;
for(let i=1;i<=10000; i++){
  if(is3teki(i))sum+=i;
}
console.log(sum)