var maxProfit = function (inventory, orders) {
    const mod = BigInt(1e9 + 7);
    inventory.sort((a, b) => b - a);
    // ���ַ��ҳ���lΪ�߽磬��ȡ�������������Ҹ�����С�ڵ���orders
    let l = 0;
    let r = inventory[0];
    while (l < r) {
        const mid = l + ((r - l) >> 1);
        if (check(inventory, mid, orders)) r = mid;
        else l = mid + 1;
    }
    // ���ݱ߽�l���ۼ��ܼ�ֵ
    let res = 0n;
    for (const num of inventory) {
        if (num <= r) break;
        res += bigSum(r + 1, num);
        res %= mod;
        orders -= num - l;
    }
    // ����������������ü�ֵΪl����
    res += BigInt(r * orders);
    return res % mod;
};

// �����midΪ�߽磬�ܻ�õ��������Ƿ�С�ڵ���all
function check(arr, mid, all) {
    for (const num of arr) {
        if (mid > num) break;
        all -= num - mid;
        if (all < 0) return false;
    }
    return true;
}

// ��͹�ʽ
function bigSum(l, r) {
    return (BigInt(l) + BigInt(r)) * BigInt(r - l + 1) / 2n;
}
