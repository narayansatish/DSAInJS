//problem link : https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/


var check = function(nums) {
    let count =0;
    for( let i =1 ; i<=nums.length; i++){
        if(nums[i%nums.length]>=nums[i-1]){
            
        }
        else{
            count++;
        }
    }
    if(count<=1)
        return true;
    return false;
};
