var sum =0;
for(let i=1;i<=12343;i+=3){
  sum += i*(i+1)/(i+2);
}

console.log(sum);