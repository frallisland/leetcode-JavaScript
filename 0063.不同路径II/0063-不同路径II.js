/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let [m, n]=[obstacleGrid.length, obstacleGrid[0].length];
    let dp=new Array(m+1).fill(0).map(_=>new Array(n+1).fill(0));

    dp[0][1]=1;

    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            if(obstacleGrid[i-1][j-1]) continue;
            dp[i][j]=dp[i-1][j]+dp[i][j-1];
        }
    }

    return dp[m][n];
};