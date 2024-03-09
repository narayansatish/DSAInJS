//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/


var maxProfit = function(prices) {
    let currMin=Infinity , maxProfit=0;
    for(let i=1;i<prices.length;i++){
        if(currMin > prices[i-1]){
            currMin=prices[i-1];
            }
        if(prices[i]-currMin>maxProfit){
                maxProfit=prices[i]-currMin
            }
        
    }
    return maxProfit;
    
};