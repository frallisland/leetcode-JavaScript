/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(!prices.length) return 0;
    
    let f0=-prices[0], f1=0, f2=0;
    for(let i=1; i<prices.length; i++){
        let pf0=f0, pf1=f1, pf2=f2;
        f0=Math.max(pf0, pf2-prices[i]);
        f1=pf0+prices[i];
        f2=Math.max(pf2, pf1);
    }
    return Math.max(f1, f2);
};