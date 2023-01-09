function binaryLinearEquation(a, b, e, c, d, f) {
  /*
  ax + by = e
  cx + dy = f
  */

  const minv = minverse_2x2([
    [a, b],
    [c, d]
  ]);

  return {
    x: minv[0][0] * e + minv[0][1] * f,
    y: minv[1][0] * e + minv[1][1] * f
  }
}

function minverse_2x2(matrix) {
  const [a, b, c, d] = [matrix[0][0], matrix[0][1], matrix[1][0], matrix[1][1]]
  const mdeterm = a * d - b * c;
  return [
    [d / mdeterm, -b / mdeterm],
    [-c / mdeterm, a / mdeterm]
  ];
}


console.log(binaryLinearEquation(1, 2, 5, 2, 3, 8));