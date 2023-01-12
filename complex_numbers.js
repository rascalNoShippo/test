function Complex(re, im) {
  //複素数生成
  const ArgumentError = Error("Argument is not a real number."); //引数 値エラー
  if (arguments.length == 1) {
    //引数が1個の場合
    if (isComplex(re)) {
      if (Number.isFinite(re)) {
        return { //引数が数値なら複素数形式（虚部が0）に変換する
          re: re,
          im: 0
        }
      } else return re; //引数が複素数形式なら複素数をそのまま返す
    } else throw ArgumentError;
  } else if (arguments.length == 2) {
    //引数が2個の場合
    if (Number.isFinite(re) && Number.isFinite(im)) {
      return {
        re: re,
        im: im
      };
    } else throw ArgumentError;
  }
  throw Error(`Wrong number of arguments (given ${arguments.length}, expected 1 or 2).`); //引数 個数エラー
}

function isCompFormatError(...input) {
  //複素数形式エラー
  for (const item of input) {
    if (!isComplex(item)) throw Error("Malformed complex number.");
  }
}

function RoundNum(num){
  const digit = 15;
  return Math.round(num * 10 ** digit) / 10 ** digit;
}

function isComplex(num) {
  //複素数判定
  return (Number.isFinite(num) || typeof num == "object" && Number.isFinite(num.re) && Number.isFinite(num.im));
}

function isRealNum(num) {
  //実数判定
  return isComplex(num) && (Number.isFinite(num) || num.im === 0);
}

function ImConjugate(comp) {
  //共役複素数
  isCompFormatError(comp);
  comp = Complex(comp);
  return Complex(comp.re, -comp.im + 0);
}

function ImSum(...comp) {
  //複素数の和
  isCompFormatError(...comp);
  let result = Complex(0);
  for (const item of comp) {
    result.re += Complex(item).re;
    result.im += Complex(item).im;
  }
  return result;
}

function ImSub(comp1, comp2) {
  //複素数の差（comp1 - comp2）
  isCompFormatError(comp1, comp2);
  comp1 = Complex(comp1);
  comp2 = Complex(comp2);
  return Complex(comp1.re - comp2.re, comp1.im - comp2.im);
}

function ImProduct(...comp) {
  //複素数の積
  isCompFormatError(...comp);
  let result = Complex(1);
  for (const item of comp) {
    const [a, b, c, d] = [result.re, result.im, Complex(item).re, Complex(item).im];
    result = Complex(RoundNum(a * c - b * d), RoundNum(a * d + b * c));
  }
  return result;
}

function ImDiv(numerator, denominator) {
  //複素数の商
  isCompFormatError(numerator, denominator);
  const [a, b, c, d] = [Complex(numerator).re, Complex(numerator).im, Complex(denominator).re, Complex(denominator).im];
  return Complex(RoundNum((a * c + b * d) / (c ** 2 + d ** 2)), RoundNum(-(a * d - b * c) / (c ** 2 + d ** 2)));
}

function ImAbs(comp) {
  //複素数の絶対値
  isCompFormatError(comp);
  comp = Complex(comp);
  return Math.sqrt(comp.re ** 2 + comp.im ** 2);
}

function ImExp(z) {
  // 複素指数関数 e^z
  isCompFormatError(z);
  z = Complex(z);
  const [a, b] = [z.re, z.im];
  return Complex(RoundNum(Math.exp(a) * Math.cos(b)), RoundNum(Math.exp(a) * Math.sin(b)));
}

function ImCos(z) {
  //複素数のコサイン（余弦）
  isCompFormatError(z);
  z = Complex(z);
  const e_iz = ImExp(Complex(-z.im, z.re));
  const e__iz = ImExp(Complex(z.im, -z.re));
  return Complex((e_iz.re + e__iz.re) / 2, (e_iz.im + e__iz.im) / 2);
}

function ImSin(z) {
  //複素数のサイン（正弦）
  isCompFormatError(z);
  z = Complex(z);
  const e_iz = ImExp(Complex(-z.im, z.re));
  const e__iz = ImExp(Complex(z.im, -z.re));
  return Complex((e_iz.im - e__iz.im) / 2, (e__iz.re - e_iz.re) / 2);
}

function ImTan(z) {
  //複素数のタンジェント（正接）
  isCompFormatError(z);
  z = Complex(z);
  const e_iz = ImExp(Complex(-z.im, z.re));
  const e__iz = ImExp(Complex(z.im, -z.re));
  return ImDiv(Complex((e_iz.im - e__iz.im), (e__iz.re - e_iz.re)), Complex((e_iz.re + e__iz.re), (e_iz.im + e__iz.im)));
}

function ImPower(comp, int) {
  //複素数の整数乗
  isCompFormatError(comp);
  if (!Number.isInteger) throw Error("Exponent is not an integer.");
  let arr = new Array(Math.abs(int)).fill(int > 0 ? comp : ImDiv(1, comp));
  return ImProduct(Complex(1), ...arr);
}

function ImSqrt(comp) {
  //複素数の平方根のうち実部が正のもの
  isCompFormatError(comp);
  //a + bi = √(c + di) とする
  const [c, d] = [comp.re, comp.im];
  const a = Math.sqrt((c + Math.sqrt(c ** 2 + d ** 2)) / 2);
  const b = d / Math.sqrt(2 * (c + Math.sqrt(c ** 2 + d ** 2)));
  return Complex(a, b);
}

