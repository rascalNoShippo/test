function times13friday(year){
  var arr = new Array(13);
  arr[1]=0;
  arr[2]=3;
  arr[3]=3;
  arr[4]=6;
  arr[5]=1;
  arr[6]=4;
  arr[7]=6;
  arr[8]=2;
  arr[9]=5;
  arr[10]=0;
  arr[11]=3;
  arr[12]=5;  
  
  for(let i=1; i<=12; i++){
    arr[i] += (year-2001)+Math.floor((year-2000)/4);
    arr[i] = arr[i]%7;
  }
  
  arr.shift();
  return arr.filter(e=>e==0).length;
}

var count = 0;
var i = 0;
do{
  count += times13friday(2000 + ++i);
}while(count<666)
  
console.log(2000 + i)