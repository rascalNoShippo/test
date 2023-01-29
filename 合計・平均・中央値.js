function sum(...nums){
  let result = 0;
  for(const n of nums){
    if(isFinite(n)) result += +n;
  }
  return result;
}

function count(...items){
  return items.filter(e => isFinite(+e)).length;
}

function average(...nums){
  return sum(...nums) / count(...nums);
}

function median(...nums){
  const numlist = nums.filter(e => isFinite(+e)).sort((a, b) => a - b);
  const length = numlist.length;
  return length % 2 == 1 ? numlist[(length - 1) / 2] : average(numlist[length / 2], numlist[length / 2 - 1]);
}

