var maxValueAfterReverse = function(nums) {
    let value = 0;
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        value += Math.abs(nums[i] - nums[i + 1]);
    }
    let mx1 = 0;
    for (let i = 1; i < n - 1; i++) {
        mx1 = Math.max(mx1, Math.abs(nums[0] - nums[i + 1]) - Math.abs(nums[i] - nums[i + 1]));
        mx1 = Math.max(mx1, Math.abs(nums[n - 1] - nums[i - 1]) - Math.abs(nums[i] - nums[i - 1]));
    }
    let mx2 = -Infinity, mn2 = Infinity;
    for (let i = 0; i < n - 1; i++) {
        let x = nums[i];
        let y = nums[i + 1];
        mx2 = Math.max(mx2, Math.min(x, y));
        mn2 = Math.min(mn2, Math.max(x, y));
    }
    return value + Math.max(mx1, 2 * (mx2 - mn2));
}