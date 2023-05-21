/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let digits=n.toString().split('');
    let ans=0, symbol=1;
    for(let d of digits){
        ans+=(d.charCodeAt()-'0'.charCodeAt())*symbol;
        symbol*=-1;
    }
    return ans;
};