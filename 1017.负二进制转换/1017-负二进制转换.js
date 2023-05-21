/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function(n) {
    if(n==0) return '0';
    if(n==1) return '1';
    if(n&1) return baseNeg2(Math.floor(n-1)/-2)+'1';
    return baseNeg2(Math.floor(n/-2))+'0';
};