/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let res=0, cur=0;
    for(let num of gain){
        cur+=num;
        res=Math.max(res, cur);
    }
    return res;
};