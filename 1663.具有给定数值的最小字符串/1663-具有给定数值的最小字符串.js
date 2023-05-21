var getSmallestString = function(n, k) {
    let ans = '';
    for (let i = 1; i <= n; i++) {
        const lower = Math.max(1, k - (n - i) * 26);
        k -= lower;
        ans += String.fromCharCode('a'.charCodeAt() + lower - 1);
    }
    return ans;
};