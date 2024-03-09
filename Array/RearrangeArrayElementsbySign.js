// https://leetcode.com/problems/rearrange-array-elements-by-sign/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let resultList=Array(nums.length);
    let posIndex=0,negIndex=1;
    nums.forEach((el,index)=>{
        if(el>0){
            resultList[posIndex]=el;
            posIndex=posIndex+2;
        }
        else{
           resultList[negIndex]=el; 
           negIndex=negIndex+2;
        }
    })
  return resultList;  
};