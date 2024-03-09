// https://leetcode.com/problems/house-robber/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dpList=Array(nums.length).fill(-1);
    return robDp(nums , dpList, 0);
};

function robDp(nums , dpList, index){
    if(nums.length<=index){
        return 0;
    }
    if(dpList[index]!=-1){
        return dpList[index];
    }
    dpList[index]=Math.max(nums[index]+robDp(nums , dpList, index+2),robDp(nums , dpList, index+1));
    return dpList[index];

}