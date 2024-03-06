// https://leetcode.com/problems/missing-number/description/


var missingNumber = function(nums) {
    let xorResult=0;
    for(let i=0 ;i<nums.length ;i++){
        xorResult=xorResult^i^nums[i];
    }
    xorResult=xorResult^nums.length;
    return xorResult;
};
