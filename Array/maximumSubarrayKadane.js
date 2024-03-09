// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums){

    let maxSum= 0, sumSoFar=0;
    let havePositiveNumber =nums.some(el=>el>0);
    if(!havePositiveNumber){
        return Math.max(...nums);
    }
    nums.forEach((el)=>{
        if(sumSoFar+el<=0){
            sumSoFar=0;
        }
        else{
            sumSoFar=sumSoFar+el;
            if(sumSoFar>maxSum){
                maxSum=sumSoFar;
            }
        }
    })
    return maxSum;
    
}