/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length - 1
    let arr = []
    while(left <= right){
        let leftP = nums[left] * nums[left]
        let rightP = nums[right] * nums[right]
        if(leftP >= rightP){
            arr.unshift(leftP)
            left++
        }else{
            arr.unshift(rightP)
            right--
        }
    }
    return arr;
};