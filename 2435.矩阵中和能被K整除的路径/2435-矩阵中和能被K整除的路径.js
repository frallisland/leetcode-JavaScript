/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function(g, k) {
    const m=g.length;
    const n=g[0].length;
    const MOD=1000000007;
    
    let ans=0;
    let dp=new Array(m+1).fill(0).map(x=>new Array(n+1).fill(0).map(x=>new Array(k).fill(0)));
    let res;
    dp[0][1][0]=1;
    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            // ×ó±ßºÍÉÏ±ß
            for(let t=0; t<k; t++){
                res=(t+g[i-1][j-1])%k;
                dp[i][j][res]=(dp[i-1][j][t]+dp[i][j-1][t])%MOD;
            }
        }
    }
    return dp[m][n][0];
};