/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let ans=0;
    for(let banks of accounts){
        ans=Math.max(ans, _.sum(banks));
    }
    return ans;
};