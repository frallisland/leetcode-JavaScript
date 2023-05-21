/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    const n=nums.length;
    let res=0, left=0;
    let pos1=-1, pos2=-1;
    for(let right=0; right<n; right++){
        if(nums[right]===minK) pos1=right;
        if(nums[right]===maxK) pos2=right;
        if(nums[right]<minK || nums[right]>maxK) left=right+1;
        res+=Math.max(0, Math.min(pos1, pos2)-left+1);
    }
    return res;
};