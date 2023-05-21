const MOD = 1000000007;
var dieSimulator = function(n, rollMax) {
    const d = new Array(n + 1).fill(0).map(() => new Array(6).fill(0));
    const sum = new Array(n + 1).fill(0);
    sum[0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < 6; j++) {
            let pos = Math.max(i - rollMax[j] - 1, 0);
            let sub = ((sum[pos] - d[pos][j]) % MOD + MOD) % MOD;
            d[i][j] = ((sum[i - 1] - sub) % MOD + MOD) % MOD;
            if (i <= rollMax[j]) {
                d[i][j] = (d[i][j] + 1) % MOD;
            }
            sum[i] = (sum[i] + d[i][j]) % MOD;
        }
    }
    return sum[n];
};