/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    k--;
    let res = 0;
    while (k > 0) {
        k &= k - 1;
        res ^= 1;
    }
    return res;
};
