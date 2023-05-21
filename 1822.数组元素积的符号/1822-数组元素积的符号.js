/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let cnt=0;
    for(let num of nums){
        if(num===0) return 0;
        if(num<0) cnt++;
    }
    return cnt%2?-1:1;
};