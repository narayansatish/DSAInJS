// https://leetcode.com/problems/subsets-ii/description/

var subsetsWithDup = function(nums) {
    let resultList=[[]];
    nums.sort(function(a, b) {
    return a - b;
});
    subsetsWithDupRecursiveFn(nums , resultList , 0 , []) 
    return resultList
    
};


 function subsetsWithDupRecursiveFn(nums , resultList , index , currList) {
 
  if(index>=nums.length)
    return ;
    resultList.push([...currList,nums[index]])
  subsetsWithDupRecursiveFn(nums, resultList , index+1 , [...currList,nums[index]]);
  for(let i=index+1 ; i<nums.length ;i++){
      if(nums[i-1]!=nums[i]){
          resultList.push([...currList,nums[i]])
          subsetsWithDupRecursiveFn(nums , resultList , i+1 , [...currList,nums[i]]);
      }
  }
};
