// https://leetcode.com/problems/unique-paths/description/
var uniquePaths = function(m, n) {
    
    let dpNumberOfWays=[];
    for(let i=0;i<m;i++){
        dpNumberOfWays.push(Array(n).fill(-1));
    }
    dpNumberOfWays[m-1][n-1]=1;
    return NUniqueWay(dpNumberOfWays , m, n , 0 , 0);
};

function NUniqueWay(dpNumberOfWays , m, n , currM , currN){
    if(currN>=n || currM>=m){
        return 0;
    }
    if(currN>=n || currM>=m){
        return 0;
    }
    if(dpNumberOfWays[currM][currN]!=-1){
        return dpNumberOfWays[currM][currN];
    }
    dpNumberOfWays[currM][currN]=NUniqueWay(dpNumberOfWays , m, n , currM+1 , currN)+NUniqueWay(dpNumberOfWays , m, n , currM , currN+1)
    return dpNumberOfWays[currM][currN];
}