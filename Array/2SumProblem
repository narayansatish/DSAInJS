// https://leetcode.com/problems/two-sum/description/

var twoSum = function(nums, target) {
    let numsMap={};
    let result;
    nums.some((el,index)=>{
        if(numsMap[target-el]){
            result=[index , numsMap[target-el]-1];
            return true;
        }else{
            numsMap[el]=index+1;
            return false;
        }
    })
    return result;
};
