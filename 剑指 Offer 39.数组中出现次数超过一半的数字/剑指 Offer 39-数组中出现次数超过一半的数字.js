/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let vote=0, x=nums[0];
    for(let num of nums){
        if(vote===0) x=num;
        if(x===num) vote++;
        else vote--;
    }
    return x;
};