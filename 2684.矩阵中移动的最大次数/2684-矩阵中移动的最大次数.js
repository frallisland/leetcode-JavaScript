/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(g) {
    const m=g.length, n=g[0].length
    let dp=new Array(m).fill(null).map(_=>new Array(n).fill(-1))
    
    for(let i=0; i<m; i++) dp[i][0]=0
    
    for(let j=0; j<n-1; j++){
        for(let i=0; i<m; i++){
            if(dp[i][j]===-1) continue
            for(let [ni, nj] of [[i-1, j+1], [i, j+1], [i+1, j+1]]){
                if(ni>=0 && ni<m && nj>=0 && nj<n && g[ni][nj]>g[i][j]){
                    dp[ni][nj]=Math.max(dp[i][j]+1, dp[ni][nj])
                }
            }
        }
    }

    let ans=0
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            ans=Math.max(ans, dp[i][j])
        }
    }
    return ans
    
};