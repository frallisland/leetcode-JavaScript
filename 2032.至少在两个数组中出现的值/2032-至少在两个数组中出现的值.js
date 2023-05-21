var twoOutOfThree = function(nums1, nums2, nums3) {
    const map = new Map();
    for (const i of nums1) {
        map.set(i, 1);
    }
    for (const i of nums2) {
        map.set(i, (map.get(i) || 0) | 2);
    }
    for (const i of nums3) {
        map.set(i, (map.get(i) || 0) | 4);
    }
    const res = [];
    for (const [k, v] of map.entries()) {
        if ((v & (v - 1)) !== 0) {
            res.push(k);
        }
    }
    return res;
};