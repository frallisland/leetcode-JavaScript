/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let ans=-1;
    for(let num of nums){
        if(num<0) continue;
        if(nums.indexOf(num*-1)!==-1){
            ans=Math.max(ans, num);
        }
    }
    return ans;
};