function frequencyToNote(frequency, freqA4 = 440) {
  if (!Number.isFinite(frequency) || !Number.isFinite(freqA4)) {
    throw new TypeError("Argument must be non-negative number.")
  }
  if (frequency <= 0 || freqA4 <= 0) {
    throw new RangeError("Argument must be non-negative number.");
  }
  const freqC4 = freqA4 * (2 ** (-3 / 4));
  const pitch = 1200 * (Math.log2(frequency) - Math.log2(freqC4));
  const noteNames = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"];
  const freqNoteName = noteNames[Math.floor(mod(pitch + 50, 1200) / 100)];
  const pitchDeviation = mod(pitch + 50, 100) - 50;
  const octave = Math.floor((pitch + 50) / 1200) + 4;
  return `${freqNoteName}${octave} ${pitchDeviation >= 0 ? "+" : ""}${pitchDeviation}`;
}

function mod(dividend, divisor) {
  if (dividend < 0) {
    dividend += Math.floor(-dividend / divisor + 1) * divisor
  }
  return dividend % divisor;
}

console.log(frequencyToNote(660))
