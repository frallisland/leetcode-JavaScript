/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let xor=0
    for(let num of nums){
        xor^=num;
    }
    for(let i=0; i<=nums.length; i++){
        xor^=i;
    }
    return xor;
};