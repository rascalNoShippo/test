//LCM of N integers
//N 個の正の整数 A_1,A_2,…,A_N の最小公倍数を求めてください。

function lcmN(...num) {
  var len = num.length;
  var inter = 1;
  for (var i = 0; i < len; i++) {
    inter = lcm(inter, num[i]);
  }
  return inter;
}

function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return a * b / gcd(a, b);
}

console.log(lcmN(12, 18, 14));
