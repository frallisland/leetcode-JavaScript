/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let x=0;
    for(let i=1; i<=n; i++){
        x=(x+m)%i;
    }
    return x;
};