//https://leetcode.com/problems/house-robber-ii/description/

function rob(nums) {
    let dpList = [];
    nums.forEach((element) => {
      dpList.push({ 0: -1, 1: -1 });
    });

    let x = robDp(nums, dpList, 0, 0);

    return x;
  }

  function robDp(nums, dpList, index, firstIndexSelectionFlag) {
    if (nums.length <= index) {
      return 0;
    }
    if (dpList[index][firstIndexSelectionFlag] != -1) {
      return dpList[index][firstIndexSelectionFlag];
    }
    let a;
    if (index == 0) a = robDp(nums, dpList, index + 2, 1);
    else {
      a = robDp(nums, dpList, index + 2, firstIndexSelectionFlag);
    }
    let c;
    if (index == nums.length - 1 && firstIndexSelectionFlag == 1) {
      c = a;
    } else {
      c = nums[index] + a;
    }
    dpList[index][firstIndexSelectionFlag] = Math.max(
      c,
      robDp(nums, dpList, index + 1, firstIndexSelectionFlag)
    );
    console.log(
      index,
      firstIndexSelectionFlag,
      dpList[index][firstIndexSelectionFlag]
    );
    return dpList[index][firstIndexSelectionFlag];
  }