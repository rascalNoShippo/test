function isPrime(num) {
  var root = Math.sqrt(num);
  for (let i = 2; i <= root; i++) {
    if (num % i == 0) return "No";
  }
  return "Yes";
}

isPrime(10 ** 9 + 7);