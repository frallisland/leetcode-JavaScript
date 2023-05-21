/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {
    const n=nums.length;
    let minStuff=nums[n-1];
    for(let i=n-3; i>=0; i--){
        if(nums[i]>minStuff){
            return false;
        }
        minStuff=Math.min(minStuff, nums[i+1]);
    }
    return true;
};