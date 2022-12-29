// GCD of N integers
// N 個の正の整数 A_1,A_2,…,A_N の最大公約数を求めてください。

function gcdN(...num){
  var len = num.length;
  var inter = 0;
	for(var i=0;i<len; i++){
    inter = gcd(inter, num[i]);
  }
  return inter;
}

function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

console.log(gcdN(12,18,24))
