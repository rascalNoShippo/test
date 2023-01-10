function divisor(n){
  if(!Number.isInteger(+n) || !(+n > 0)){
    return "値が正しくありません。";
  }
  const sqrt = Math.sqrt(n)
  var arr = [];
	for(var i = 1; i <= sqrt; i++){
    if(n % i == 0){
      arr.push(i, n / i);
    }
  }
  if(sqrt % 1 == 0){
      arr.pop();
    }
  return arr.sort((a,b) => a - b);
}

function isPrime(num){
  return divisor(num).length == 2;
}

