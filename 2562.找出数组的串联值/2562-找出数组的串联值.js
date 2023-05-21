/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let ans=0;
    while(nums.length>1){
        ans+=parseInt(nums[0].toString()+nums[nums.length-1].toString());
        nums.shift();
        nums.pop();
    }
    if(nums.length){
        ans+=nums[0];
    }
    return ans;
};