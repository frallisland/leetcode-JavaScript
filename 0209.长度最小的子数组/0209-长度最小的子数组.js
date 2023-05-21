/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const n=nums.length;
    let ans=Infinity, _sum=0;
    for(let l=0, r=0; r<n; r++){
        _sum+=nums[r];
        while(_sum>target){
            if(_sum-nums[l]<target) break;
            _sum-=nums[l];
            l++;
        }
        // console.log(_sum, l, r);
        if(_sum>=target) ans=Math.min(ans, r-l+1);
    }
    return ans===Infinity?0:ans;
};