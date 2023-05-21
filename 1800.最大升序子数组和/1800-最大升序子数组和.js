/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let pre=0, ans=0, tmp=0;
    const n=nums.length;
    for(let i=0; i<n; i++){
        if(nums[i]>pre){
            tmp+=nums[i];
            pre=nums[i];
            ans=Math.max(ans, tmp);
        }else{
            tmp=nums[i];
            pre=nums[i];
        }
    }
    return ans;
};