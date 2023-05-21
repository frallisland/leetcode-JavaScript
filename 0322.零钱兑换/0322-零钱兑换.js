/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp=new Array(amount+1).fill(10010);
    
    dp[0]=0;
    for(let i=1; i<=amount; i++){
        for(let coin of coins){
            if(coin>i) continue;
            dp[i]=Math.min(dp[i-coin]+1, dp[i]);
        }
    }
    // console.log(dp);
    return dp[amount]===10010?-1:dp[amount];
};