/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    target=Math.abs(target);
    let n=Math.ceil((-1+Math.pow(8*target+1, 0.5))/2);
    return (Math.floor(n*(n+1)/2)-target)%2===0?n:n+1+(n%2);
};