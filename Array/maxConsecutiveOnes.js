//https://leetcode.com/problems/max-consecutive-ones/description/

var findMaxConsecutiveOnes = function(nums) {
    
    let max=0, currCount=0;
    nums.forEach((el , index)=>{
        if(el==0){
            max=Math.max(max, currCount);
            currCount=0;
        }
        else{
            currCount++;
        }
    })
    max=Math.max(max, currCount);
    return max;
};
