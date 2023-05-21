/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    function reverseK(l, r){
        while(l<r){
            [nums[l], nums[r]]=[nums[r], nums[l]];
            l++, r--;
        }
    }
    k=k%nums.length;
    reverseK(0, nums.length-1);
    reverseK(0, k-1);
    reverseK(k, nums.length-1);
};