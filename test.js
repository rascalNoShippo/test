function trib(times){
  var arr = [0, 0, 1];

  var result = [];
  if(times <= 3){
    for(var i = 0; i < times; i++){
      result.push(arr[i]);
    }
    return result;
  }
  for(var i = 3; i < times; i++){
    arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }
  return arr;
}

WScript.Echo(trib(5));
