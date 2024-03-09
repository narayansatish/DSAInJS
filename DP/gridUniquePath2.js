// https://leetcode.com/problems/unique-paths-ii/description/


var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    let dpObstacleGridWays = [];
    for (let i = 0; i < m; i++) {
      dpObstacleGridWays.push(Array(n).fill(-1));
    }
    dpObstacleGridWays[m - 1][n - 1] = 1;
    return NUniqueWayObstacleGrid(obstacleGrid, dpObstacleGridWays, m, n, 0, 0);
  };

  function NUniqueWayObstacleGrid(
    obstacleGrid,
    dpObstacleGridWays,
    m,
    n,
    currM,
    currN
  ) {
    if (currN >= n || currM >= m) {
      return 0;
    }
    if (currN >= n || currM >= m) {
      return 0;
    }
    console.log(m, n);
    if (obstacleGrid[currM][currN] == 1) {
      return 0;
    }
    if (dpObstacleGridWays[currM][currN] != -1) {
      return dpObstacleGridWays[currM][currN];
    }
    dpObstacleGridWays[currM][currN] =
      NUniqueWayObstacleGrid(obstacleGrid,dpObstacleGridWays, m, n, currM + 1, currN) +
      NUniqueWayObstacleGrid(obstacleGrid,dpObstacleGridWays, m, n, currM, currN + 1);
    return dpObstacleGridWays[currM][currN];
  }