
//https://leetcode.com/problems/combination-sum/


var combinationSum = function(candidates, target) {
   let resultList=[]; 
  combinationSumRecursiveFn(candidates, target , resultList , 0 , [])
  return resultList
};

 function combinationSumRecursiveFn(candidates, target , resultList , index , currList) {
  if(index>=candidates.length)
    return ;
  if(target==0 ){
    if(currList.length)
      resultList.push(currList);
    return ;
  }
  if(target<0){
    return ;
  }
  combinationSumRecursiveFn(candidates, target, resultList , index+1 , currList);
  
 
  combinationSumRecursiveFn(candidates, target - candidates[index], resultList , index ,[...currList,candidates[index]]);
    
};
