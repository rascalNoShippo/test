//N 以下の正の整数の中で、X の倍数または Y の倍数であるものの個数はいくつありますか？

function NoM(n, x, y){
  // if(!inputValidation(n) || !inputValidation(x) || !inputValidation(y) || x >= y){
  //   return "エラー";
  // }
  var count = 0;
  for(var i = 1; i <= n; i++){
    if((i % x) * (i % y) == 0){
      count++;
    }
  }
  return count;
}

function inputValidation(input){
  return (Number.isInteger(+input) && input > 0);
}

function lcm(a, b){
  return a * b / gcd(a, b);
}

function gcd(a, b){
  if(a == 0){
    return b;
  }else if(b == 0){
    return a;
  }
  return gcd(b, a % b);
}

WScript.Echo(NoM(1000000,11,13));