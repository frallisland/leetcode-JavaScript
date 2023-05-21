/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let x=Math.floor(Math.sqrt((n+1)*n/2));
    console.log(x)
    return x*x===(n+1)*n/2?x:-1;
};