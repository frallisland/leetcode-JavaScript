/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    const n=nums.length;
    for(let i=1; i<n; i++){
        nums[i]+=nums[i-1];
    }

    let mn=Infinity;
    for(let i=0; i<n; i++){
        mn=Math.min(mn, nums[i]);
    }
    return mn>=0?1:-1*mn+1;
};