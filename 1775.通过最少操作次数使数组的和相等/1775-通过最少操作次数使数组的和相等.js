var minOperations = function(nums1, nums2) {
    const n = nums1.length, m = nums2.length;
    if (6 * n < m || 6 * m < n) {
        return -1;
    }
    const cnt1 = new Array(7).fill(0);
    const cnt2 = new Array(7).fill(0);
    let diff = 0;
    for (const i of nums1) {
        ++cnt1[i];
        diff += i;
    }
    for (const i of nums2) {
        ++cnt2[i];
        diff -= i;
    }
    if (diff === 0) {
        return 0;
    }
    if (diff > 0) { // nums1>num2
        return help(cnt2, cnt1, diff);
    }
    // nums2>num1
    return help(cnt1, cnt2, -diff);
}

const help = (h1, h2, diff) => { // h2-h1=diff
    const h = new Array(7).fill(0);
    for (let i = 1; i < 7; ++i) {
        h[6 - i] += h1[i]; // 提升的大小
        h[i - 1] += h2[i]; // 降低的大小
    }
    let res = 0;
    for (let i = 5; i > 0 && diff > 0; --i) {
        let t = Math.min(Math.floor((diff + i - 1) / i), h[i]);
        res += t;
        diff -= t * i;
    }
    return res;
};
