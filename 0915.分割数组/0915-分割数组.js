/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    // 第一个是最大值，右边第一个比它大的数
    // 不是最大值，右边第一个比它
    const n=nums.length;
    let arr=[...nums];
    for(let i=n-2; i>=0; i--){
        arr[i]=Math.min(arr[i+1], arr[i]);
    }
    let max=-1;
    for(let i=0; i<n-1; i++){
        max=Math.max(max, nums[i]);
        if(max<=arr[i+1]) return i+1;
    }
};