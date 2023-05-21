/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=prices[0], maxp=0;
    for(let i=1; i<prices.length; i++){
        maxp=Math.max(maxp, prices[i]-min);
        min=Math.min(min, prices[i]);
    }
    return maxp;
};