/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    const m=grid.length, n=grid[0].length;
    let dp=new Array(m+1).fill(0).map(x=>new Array(n+1).fill(0));
    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            dp[i][j]=Math.max(dp[i-1][j], dp[i][j-1])+grid[i-1][j-1];
        }
    }
    // console.log(dp);
    return dp[m][n];
};