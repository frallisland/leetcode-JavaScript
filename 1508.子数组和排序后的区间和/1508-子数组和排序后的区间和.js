/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    // 利用前缀数组 n^2 求出 子数组和
    const MOD=10**9+7;
    nums.unshift(0);
    for(let i=1; i<nums.length; i++){
        nums[i]+=nums[i-1];
    }

    let preSum=[];
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            preSum.push(nums[j]-nums[i]);
        }
    }
    preSum.push(0);
    preSum.sort((a, b)=>a-b);
    
    for(let i=1; i<preSum.length; i++){
        preSum[i]=(preSum[i]+preSum[i-1])%MOD;
    }

    return (preSum[right]-preSum[left-1])%MOD;
};