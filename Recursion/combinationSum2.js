
// https://leetcode.com/problems/combination-sum-ii/submissions/1171924535/
var combinationSum2 = function(candidates, target) {

let resultList=[];
candidates.sort(function(a, b) {
    return a - b;
});
candidates.forEach(el=>{
    console.log(el);
})
combinationSum2RecursiveFn(candidates, target , resultList , 0 , []) 
return resultList
    
};

 function combinationSum2RecursiveFn(candidates, target , resultList , index , currList) {
  
  if(target==0 ){
    if(currList.length)
      resultList.push(currList);
    return ;
  }
  if(target<0){
    return ;
  }
  if(index>=candidates.length)
    return ;
  combinationSum2RecursiveFn(candidates, target-candidates[index] , resultList , index+1 , [...currList,candidates[index]]);
  for(let i=index+1 ; i<candidates.length ;i++){
      if(candidates[i-1]!=candidates[i]){
          combinationSum2RecursiveFn(candidates, target-candidates[i] , resultList , i+1 , [...currList,candidates[i]]);
      }
  }
};
