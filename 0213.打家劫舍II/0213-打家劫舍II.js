/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n=nums.length;
    
    if(n===1) return nums[0];
    if(n===2) return Math.max(nums[0], nums[1]);

    let ans=0;
    let dp=new Array(n).fill(0);
    [dp[0], dp[1]] = [nums[0], Math.max(nums[0], nums[1])]
    for(let i=2; i<n-1; i++){
        dp[i]=Math.max(dp[i-1], dp[i-2]+nums[i]);
    }
    ans=Math.max(ans, dp[n-2]);

    dp[1]=nums[1], dp[2]=Math.max(nums[1], nums[2]);
    for(let i=3; i<n; i++){
        dp[i]=Math.max(dp[i-1], dp[i-2]+nums[i]);
    }
    return Math.max(dp[n-1], ans);
};