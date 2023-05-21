/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let ans=0;
    for(let i=1; i<nums.length; i++){
        if(nums[i]>nums[i-1]) continue;
        let tar=nums[i-1]+1;
        ans+=tar-nums[i];
        nums[i]=tar;
    }
    return ans;
};