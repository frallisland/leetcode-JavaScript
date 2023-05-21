/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let cnt=new Array(nums.length).fill(1);
    
    for(let i=1; i<nums.length; i++){
        for(let j=i-1; j>=0; j--){
            if(nums[j]<nums[i]){
                cnt[i]=Math.max(cnt[j]+1, cnt[i]);
            }
        }
    }
    return _.max(cnt);
};