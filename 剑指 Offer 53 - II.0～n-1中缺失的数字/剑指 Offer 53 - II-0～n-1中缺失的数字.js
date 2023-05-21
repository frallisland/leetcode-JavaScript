var missingNumber = function(nums) {
    const n = nums.length + 1;
    let total = Math.floor(n * (n - 1) / 2);
    let arrSum = 0;
    for (let i = 0; i < n - 1; i++) {
        arrSum += nums[i];
    }
    return total - arrSum;
};