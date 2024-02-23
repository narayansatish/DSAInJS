// Problem Link : https://leetcode.com/problems/coin-change/description/
/*
# Intuition
<!--  -->

# Approach
<!-- -->

# Complexity
- Time complexity:


- Space complexity:


# Code
*/
var coinChange = function (coins, amount) {
    let dpResult = Array(amount + 1).fill(-2);
    coins.forEach((el) => {
      if (el <= amount) dpResult[el] = 1;
    });
    return coinChangeRecu(coins, amount, dpResult);
  };
  function coinChangeRecu(coins, amount, dpResult) {
    if (amount == 0) {
      return 0;
    }
    if (amount < 0) {
      return -1;
    }
    if (dpResult[amount] != -2) {
      return dpResult[amount];
    }
    let count = Infinity;
    coins.forEach((coin) => {
      let a = coinChangeRecu(coins, amount - coin, dpResult);
      if (a != -1) {
        count = Math.min(a, count);
      }
    });
    if (count != Infinity) {
      dpResult[amount] = count + 1;
    } else {
      dpResult[amount] = -1;
    }
    return dpResult[amount];
  }
