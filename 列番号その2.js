function COLNUMBERTOSTRING(number) {
  if (!Number.isFinite(number)) {
    throw new TypeError("The malformed argument type.");
  } else if(number <= 0 || !Number.isInteger(number)) {
    throw new RangeError("Argument must be a positive integer.");
  }
  const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  do {
    result = alphabet[(number - 1) % 26 + 1] + result; //割り切れるときに0でなく26とする
    number = Math.floor((number - 1) / 26); // そのまま割ると割り切れるとき（Zのとき）にずれるため1を足して調整
  } while(number > 0);
  return result;
}

console.log(COLNUMBERTOSTRING(703))
