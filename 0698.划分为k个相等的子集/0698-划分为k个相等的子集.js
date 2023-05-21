var canPartitionKSubsets = function(nums, k) {
    const dfs = (s, p) => {
        // �Ƶ��� 0 
        if (s === 0) {
            return true;
        }
        // ��ǰλ��Ϊ false, ���ؼ��ٱ���
        if (!dp[s]) {
            return dp[s];
        }
        // ��ǰλ���ѷ���
        dp[s] = false;
        for (let i = 0; i < n; i++) {
            // ��ǰλ����֮ǰ�ĺͳ���Ŀ��ֵ��һ����ֵ
            if (nums[i] + p > per) {
                break;
            }
            // ��ǰֵ���Է���
            if (((s >> i) & 1) != 0) {
                // ����һ״̬�������������ı�Ϊ0
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