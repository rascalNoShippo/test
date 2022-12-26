// 赤・青のカードが各 1 枚ずつあり、あなたはそれぞれのカードに 1 以上 N 以下の整数を 1 つ書き込みます。
// カードに書かれた整数の合計が S 以下となる書き方は、いくつありますか？

function BF1(N, S){
  var count = 0;
  for(var i = 1; i <= N; i++){
    for(var j = 1; j <= N; j++){
      if(i + j <= S){
        count++;
      }
    }
  }
  return count;
}

WScript.Echo(BF1(869,120)); //7140