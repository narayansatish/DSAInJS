// https://leetcode.com/problems/minimum-path-sum/description/


var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    let dpMinSum = [];
    for (let i = 0; i < m; i++) {
      dpMinSum.push(Array(n).fill(-1));
    }
    dpMinSum[m-1][n-1]=grid[m-1][n-1];
    return minSumOnIndex(grid, dpMinSum, m, n, 0, 0);
  };
  function minSumOnIndex(grid, dpMinSum, m, n, currM, currN) {
    if (currM >= m || currN >= n) {
      return Infinity;
    }
    if (dpMinSum[currM][currN] != -1) {
      return dpMinSum[currM][currN];
    }
    dpMinSum[currM][currN] =
      grid[currM][currN] +
      Math.min(
        minSumOnIndex(grid, dpMinSum, m, n, currM + 1, currN),
        minSumOnIndex(grid, dpMinSum, m, n, currM, currN + 1)
      );
    return dpMinSum[currM][currN];
  }