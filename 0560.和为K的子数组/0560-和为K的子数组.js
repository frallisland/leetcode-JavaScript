var subarraySum = function(nums, k) {
    const mp = new Map();
    mp.set(0, 1);
    let count = 0, pre = 0;
    for (const x of nums) {
        pre += x;
        if (mp.has(pre - k)) {
            count += mp.get(pre - k);
        }
        mp.set(pre, (mp.get(pre)||0) + 1);
    }
    return count;
};