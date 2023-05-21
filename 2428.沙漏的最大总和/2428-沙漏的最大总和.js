/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function(g) {
    const m=g.length;
    const n=g[0].length;
    let ans=0;
    
    for(let i=1; i<m-1; i++){
        for(let j=1; j<n-1; j++){
            ans=Math.max(ans, g[i-1][j-1]+g[i-1][j]+g[i-1][j+1]+g[i+1][j-1]+g[i+1][j]+g[i+1][j+1]+g[i][j]);
        }
    }
    return ans;
};