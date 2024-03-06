// https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/1171980285/
 var letterMap={
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz"
}

 
var letterCombinations = function(digits) {
    
    let resultList=[];
    letterCombinationsRecursiveFun(digits , resultList , "" , 0)
    return resultList;
};

function letterCombinationsRecursiveFun(digits , resultList , currStr , index){
    if(index ==digits.length ){
        if(digits.length!=0)
            resultList.push(currStr);
        return ;
    }
    let lettersInDigit=letterMap[digits[index]];
    for(let  i=0;i<lettersInDigit.length;i++){
        letterCombinationsRecursiveFun(digits , resultList , currStr+lettersInDigit[i] , index+1)
    }
}
