// https://leetcode.com/problems/combination-sum-iii/description/

var combinationSum3 = function(k, n) {
    let nums=[1,2,3,4,5,6,7,8,9];
    let resultList=[]
    combinationSum3RecFun(k,n , nums, 0 , [], resultList)
    return resultList;
};

function combinationSum3RecFun(k,n , nums, index , currList, resultList){
       
    if(n==0 && currList.length==k){
        resultList.push(currList);
        return ;
    }
    if(n<=0){
        return ;
    }
    if(currList.length==k || index >=nums.length){
        return ;
    }
     combinationSum3RecFun(k,n , nums, index+1 , [...currList], resultList)
      combinationSum3RecFun(k,n-nums[index] , nums, index+1 , [...currList,nums[index]], resultList);
}
