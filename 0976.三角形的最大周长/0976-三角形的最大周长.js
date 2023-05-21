/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b)=>a-b);
    let ans=0;
    for(let i=2; i<nums.length; i++){
        if(nums[i-2]+nums[i-1]>nums[i]){
            ans=Math.max(ans, nums[i-2]+nums[i-1]+nums[i]);
        }
    }
    return ans;
};