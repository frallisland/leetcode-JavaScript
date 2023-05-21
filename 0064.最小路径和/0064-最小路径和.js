/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let [m, n]=[grid.length, grid[0].length];
    let dp=new Array(m+1).fill(0).map(_=>new Array(n+1).fill(Infinity));
    
    dp[1][0]=0;
    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            dp[i][j]=Math.min(dp[i-1][j], dp[i][j-1])+grid[i-1][j-1];
        }
    }
    return dp[m][n];
};