function mdeterm(matrix) {
  //行列式
  const n = matrix.length;
  for (const row of matrix) {
    if (row.length != n) {
      throw new Error("Input is not a square matrix.");
    }
  }
  //三角行列を作成
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i < j) {
        let buf = matrix[j][i] / matrix[i][i];
        for (k = 0; k < n; k++) {
          matrix[j][k] -= matrix[i][k] * buf;
        }
      }
    }
  }

  //対角部分の積
  let det = 1;
  for (i = 0; i < n; i++) {
    det *= matrix[i][i];
  }
  return det;
}

mdeterm([[2,-2,4,2],[2,-1,6,3],[3,-2,12,12],[-1,3,-4,4]])