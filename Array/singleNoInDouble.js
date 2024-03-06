// https://leetcode.com/problems/single-number/description/

var singleNumber = function(nums) {
    let xorResult=0;
    nums.forEach((el)=>{
        xorResult=xorResult^el;
    })
    return xorResult;
};
