
// https://leetcode.com/problems/subsets/

var subsets = function(nums) {
    let subsets=[];
    createSubset(nums , 0 , [], subsets);
    return subsets
};
function createSubset(nums , index , currSubsets, subsets){
    if(index==nums.length){
        subsets.push(currSubsets);
        return;
    }
    createSubset(nums,index+1,[...currSubsets],subsets);
    currSubsets.push(nums[index]);
    createSubset(nums,index+1,currSubsets,subsets);

}
