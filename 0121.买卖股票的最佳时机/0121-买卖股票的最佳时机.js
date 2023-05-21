/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let pre=prices[0], ans=0;
    for(let p of prices){
        pre=Math.min(p, pre);
        ans=Math.max(ans, p-pre);
    }
    return ans;
};