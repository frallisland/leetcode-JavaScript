var arithmeticTriplets = function(nums, diff) {
    let ans = 0;
    const n = nums.length;
    for (let i = 0, j = 1, k = 2; i < n - 2 && j < n - 1 && k < n; i++) {
        j = Math.max(j, i + 1);
        while (j < n - 1 && nums[j] - nums[i] < diff) {
            j++;
        }
        if (j >= n - 1 || nums[j] - nums[i] > diff) {
            continue;
        }
        k = Math.max(k, j + 1);
        while (k < n && nums[k] - nums[j] < diff) {
            k++;
        }
        if (k < n && nums[k] - nums[j] === diff) {
            ans++;
        }
    }
    return ans;
};