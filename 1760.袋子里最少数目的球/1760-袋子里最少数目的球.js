var minimumSize = function(nums, maxOperations) {
    let left = 1, right = _.max(nums);
    let ans = 0;
    while (left <= right) {
        const y = Math.floor((left + right) / 2);
        let ops = 0;
        for (const x of nums) {
            ops += Math.floor((x - 1) / y);
        }
        if (ops <= maxOperations) {
            ans = y;
            right = y - 1;
        } else {
            left = y + 1;
        }
    }
    return ans;
};