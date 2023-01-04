var list = [];

for(let i=1; i<=9; i++){
  for(let j=1;j<=9;j++){
    list.push((10**i-1)/9*j);
  }
}

for(let num of list){
  if(num % 4818 == 0)console.log(num);
}