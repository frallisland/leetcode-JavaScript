/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let cnt=new Map();
    for(let num of nums){
        cnt.set(num, (cnt.get(num)||0)+1);
    }
    let pair=0, sur=0;
    for(let [_, v] of cnt){
        pair+=Math.floor(v/2);
        sur+=v%2;
    }
    return [pair, sur];
};