var sum = 0;

for(let i=1; i<=1024; i++){
  for(let j=1 ;j<=1024 ;j++){
    sum += i % j;
  }
}

console.log(sum)