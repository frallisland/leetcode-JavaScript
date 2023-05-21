var maxProfit = function (inventory, orders) {
    const mod = BigInt(1e9 + 7);
    inventory.sort((a, b) => b - a);
    // 二分法找出以l为边界，获取最多的球数量，且该数量小于等于orders
    let l = 0;
    let r = inventory[0];
    while (l < r) {
        const mid = l + ((r - l) >> 1);
        if (check(inventory, mid, orders)) r = mid;
        else l = mid + 1;
    }
    // 根据边界l，累计总价值
    let res = 0n;
    for (const num of inventory) {
        if (num <= r) break;
        res += bigSum(r + 1, num);
        res %= mod;
        orders -= num - l;
    }
    // 多出的数量，可以拿价值为l的球
    res += BigInt(r * orders);
    return res % mod;
};

// 检测以mid为边界，能获得的球数量是否小于等于all
function check(arr, mid, all) {
    for (const num of arr) {
        if (mid > num) break;
        all -= num - mid;
        if (all < 0) return false;
    }
    return true;
}

// 求和公式
function bigSum(l, r) {
    return (BigInt(l) + BigInt(r)) * BigInt(r - l + 1) / 2n;
}
