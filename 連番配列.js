function ArraySerial(start, end) {
  const argGiven = arguments.length;
  const argDefault = ArraySerial.length;
	if (arguments.length !== ArraySerial.length) {
    throw Error(`Wrong number of arguments (given ${argGiven}, expected ${argDefault}).`);
  }
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    throw Error("Argument is not an integer.");
  }
  return new Array(Math.abs(end - start) + 1).fill().map((e, i) => start + i * Math.sign(end - start));
}


ArraySerial(2)