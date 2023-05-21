/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans=nums[0], pre=nums[0];
    for(let i=1; i<nums.length; i++){
        if(pre>0){
            pre+=nums[i];
        }else{
            pre=nums[i];
        }
        ans=Math.max(ans, pre);
    }
    return ans;
};