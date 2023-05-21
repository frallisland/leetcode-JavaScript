/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const n=matrix.length;
    let dp=new Array(n).fill(0).map(_=>new Array(n).fill(0));

    dp[0]=matrix[0];

    for(let i=1; i<n; i++){
        for(let j=0; j<n; j++){
            let t1=Infinity, t2=dp[i-1][j], t3=Infinity;
            if(j-1>=0) t1=dp[i-1][j-1];
            if(j+1<n) t3=dp[i-1][j+1];
            dp[i][j]=Math.min(t1, t2, t3)+matrix[i][j];
        }
    }
    
    let ans=Infinity;
    for(let j=0; j<n; j++){
        ans=Math.min(ans, dp[n-1][j]);
    }
    return ans;
};