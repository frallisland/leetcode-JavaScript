/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n=prices.length;
    let dp=new Array(2).fill(0).map(_=>new Array(n).fill(0));

    dp[1][0]=-prices[0];

    for(let i=1; i<n; i++){
        dp[0][i]=Math.max(dp[0][i-1], dp[1][i-1]+prices[i]);
        dp[1][i]=Math.max(dp[1][i-1], dp[0][i-1]-prices[i])
    }
    // console.log(dp);
    return dp[0][n-1];
};