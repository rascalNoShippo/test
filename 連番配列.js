function ArraySerial(start, end) {
  if (end === undefined){
    end = start;
    start = 1;
  }
  if (!Number.isInteger(start) || !Number.isInteger(end)) throw Error("Parameter is not an integer.");
  return new Array(Math.abs(end - start) + 1).fill().map((e, i) => start + i * Math.sign(end - start));
}


ArraySerial(2,7)