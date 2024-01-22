
var climbStairs = function(n) {
    let dpList=Array(n+1).fill(-1);
    dpList[0]=1
    dpList[1]=1;
return dpClimbStairs(n ,dpList)
};

function dpClimbStairs(n ,dpList){

    if(dpList[n]!=-1)
        return dpList[n];
    dpList[n]= dpClimbStairs(n-1 ,dpList)+dpClimbStairs(n-2 ,dpList);//storing the result
    return dpList[n];
}

/*
Problen
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45



*/
