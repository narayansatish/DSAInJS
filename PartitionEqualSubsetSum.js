//problem Link: https://leetcode.com/problems/partition-equal-subset-sum/description/


/*# Intuition


# Approach


# Complexity
- Time complexity:


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
*/
 var canPartition = function (nums) {
    let sumOfNums = nums.reduce((totalSum, currElement) => {
      return totalSum + currElement;
    }, 0);
    if (sumOfNums % 2 == 1) {
      return false;
    }
    let dpArray =[];
    let i=nums.length;
    while(i--){
       dpArray.push(Array((sumOfNums/2)+1).fill(-1)) 
    }
    
 
    return partitionRecursively(nums, 0, sumOfNums/2,dpArray);
  };
  function partitionRecursively(nums, index, currSum,dpArray) {
   
   
    
    if (currSum < 0) {
      return false;
    }
    if (index >= nums.length) {
      return false;
    }
     if (currSum == 0) {
      dpArray[index][currSum]=true;
      return true;
    }
     if(dpArray[index][currSum]!=-1){
        return dpArray[index][currSum];
    }
    let a =partitionRecursively(nums, index + 1, currSum - nums[index],dpArray);
    if(a){
        dpArray[index][currSum]=a;
        return a;
    }
   
    let b=  partitionRecursively(nums, index + 1, currSum,dpArray);
    if(b){
        dpArray[index][currSum]=a;
        return b;

    }
    dpArray[index][currSum]=false;
    return false;

  }
