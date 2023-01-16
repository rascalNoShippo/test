function ColNo(num) {
  const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  debugger	
  if (Number.isInteger(+num) && +num > 0) {
    //整数からアルファベットに変換
    num = +num;
    let i = 0
    let exp = [];
    let result = "";
    do { //26進法での桁数を計算 (i)
      exp.push(1);
    } while (num >= (26 ** (++i + 1) - 1) / 25);
    //各桁は必ず1(A)以上なので、各桁1の数を引く
    num -= (26 ** (--i + 1) - 1) / 25;
    let def = num;
    //各桁を求めて1を足し、対応するアルファベットに変換
    for (let n = 0; n <= i; n++) {
      exp[n] += def % 26;
      def = Math.floor(def / 26);
      result = alphabet[exp[n]] + result;
    }
    return result;
  } else if (!num.toUpperCase().match(/[^A-Z]/g) && num.length > 0) {
    //アルファベットから整数に変換
    const digit = num.length;
    let result = 0;
    num = " " + num;
    for (let i = digit - 1; i >= 0; i--) {
      result += 26 ** i * alphabet.indexOf(num[digit - i])
    }
    return result;
  } else throw Error("An invalid argument.");
}

ColNo("")