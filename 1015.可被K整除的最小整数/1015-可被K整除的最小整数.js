/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    let set=new Set()
    let x=1%k
    while(x && !set.has(x)){
        set.add(x);
        x=(10*x+1)%k;
    }
    return set.has(x)?-1:set.size+1;
};