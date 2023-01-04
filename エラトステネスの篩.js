function primeUpTo(num) {
  var list = new Array(num - 1).fill().map((e, i) => i + 2);
  var primeList = [];
  for (; list.length > 0;) {
    primeList.push(list[0]);
    list = list.filter(e => e % list[0] != 0);
  }
  return primeList;
}

console.log(primeUpTo(100000));