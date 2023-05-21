/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
    function mostK(k){
        let ans=0, pre=0;
        for(let num of nums){
            if(num<=k) pre++;
            else pre=0;
            ans+=pre;
        }
        return ans;
    }
    return mostK(right)-mostK(left-1);
};