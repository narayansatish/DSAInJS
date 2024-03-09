// https://leetcode.com/problems/triangle/description/


var minimumTotal = function (triangle) {
    let m = triangle.length;
    let triangleMinPathSum = [];
    for (let i = 0; i < m - 1; i++) {
      let a = [...triangle[i]];
      triangleMinPathSum.push(a.fill(null));
    }
    triangleMinPathSum.push([...triangle[m - 1]]);
    return minimumAtEveryIndex(triangle, triangleMinPathSum, m, 0, 0);
  };
  minimumTotal([[-1], [2, 3], [1, -1, -3]]);

  function minimumAtEveryIndex(triangle, triangleMinPathSum, m, currM, currN) {
    if (triangleMinPathSum[currM][currN] != null) {
      return triangleMinPathSum[currM][currN];
    }
    triangleMinPathSum[currM][currN] =
      triangle[currM][currN] +
      Math.min(
        minimumAtEveryIndex(
          triangle,
          triangleMinPathSum,
          m,
          currM + 1,
          currN + 1
        ),
        minimumAtEveryIndex(triangle, triangleMinPathSum, m, currM + 1, currN)
      );
    return triangleMinPathSum[currM][currN];
  }