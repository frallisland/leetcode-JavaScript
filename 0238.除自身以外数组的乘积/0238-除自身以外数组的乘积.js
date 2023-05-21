/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let muls=new Array(nums.length).fill(1);
    let pre=nums[0];
    for(let i=1; i<nums.length; i++){
        muls[i]*=pre;
        pre*=nums[i];
    }
    let aft=nums[nums.length-1];
    for(let i=nums.length-2; i>=0; i--){
        muls[i]*=aft;
        aft*=nums[i];
    }
    return muls;
};