//https://leetcode.com/problems/move-zeroes/

 var moveZeroes = function (nums) {
    let indexToFill = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        nums[indexToFill] = nums[i];
        indexToFill++;
      }
    }
    while (indexToFill < nums.length) {
      nums[indexToFill] = 0;
      indexToFill++;
    }
  };
