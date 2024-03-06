// https://leetcode.com/problems/generate-parentheses/description/

  var generateParenthesis = function(n) {
      let resultList=[];
      generateParaRec(resultList , n , n , "");
      return resultList;

  };
  function generateParaRec(resultList , openCount , closeCount , currStr){

    if(closeCount==0 &openCount==0){
      resultList.push(currStr);
      return;
    }
    if(openCount==closeCount){
      generateParaRec(resultList , openCount-1 , closeCount , currStr+'(');
    }
    else if(openCount < closeCount && openCount!=0){
      generateParaRec(resultList , openCount-1 , closeCount , currStr+'(')
        generateParaRec(resultList , openCount, closeCount-1 , currStr+')')
      } else if(openCount < closeCount && openCount==0){

        generateParaRec(resultList , openCount, closeCount-1 , currStr+')')
      }
  }
