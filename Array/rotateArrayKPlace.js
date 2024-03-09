// https://leetcode.com/problems/rotate-array/description/

 var rotate = function (nums, k) {
    reverseHelper(nums, 0 ,nums.length-1 );
    reverseHelper(nums , 0 ,(k%nums.length)-1);
    reverseHelper(nums  ,(k%nums.length),nums.length-1);
    
};

function reverseHelper(nums , startIndex, endIndex){
    if(endIndex-startIndex<=0)
        return;
    let temp;
    while(startIndex<endIndex){
        temp=nums[startIndex];
        nums[startIndex]=nums[endIndex];
        nums[endIndex]=temp;
        startIndex++;
        endIndex--;
    }
}
