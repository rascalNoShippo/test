function sum(arr){
  var len = arr.length;
  var result = 0;
  for(var i = 0; i < len; i++){
    result += arr[i];
  }
  return result % 100;
}

WScript.Echo(sum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]));