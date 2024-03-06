// Problem Link : https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

var removeDuplicates = function(nums) {

    let currPlace=1;
    let k=1;
    for(let i=1 ;i< nums.length;i++){
        if(nums[i-1]!=nums[i]){
            nums[currPlace]=nums[i];
            currPlace++;
            k++;
        }
    }
    return k;
    
};
