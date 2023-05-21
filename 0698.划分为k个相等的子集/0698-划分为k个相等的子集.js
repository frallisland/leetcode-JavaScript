var canPartitionKSubsets = function(nums, k) {
    const dfs = (s, p) => {
        // 推导至 0 
        if (s === 0) {
            return true;
        }
        // 当前位置为 false, 返回减少遍历
        if (!dp[s]) {
            return dp[s];
        }
        // 当前位置已访问
        dp[s] = false;
        for (let i = 0; i < n; i++) {
            // 当前位置与之前的和超过目标值下一个数值
            if (nums[i] + p > per) {
                break;
            }
            // 当前值可以访问
            if (((s >> i) & 1) != 0) {
                // 到下一状态，将满足条件的变为0
                if (dfs(s ^ (1 << i), (p + nums[i]) % per)) {
                    return true;
                }
            }
        }
        return false;
    };
    const all = _.sum(nums);
    if (all % k !== 0) {
        return false;
    }
    let per = all / k;
    nums.sort((a, b) => a - b);
    const n = nums.length;
    if (nums[n - 1] > per) {
        return false;
    }
    let dp = new Array(1 << n).fill(true);
    return dfs((1 << n) - 1, 0);
}