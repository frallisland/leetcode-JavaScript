/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
    const m=mat.length, n=mat[0].length;
    let preSum=new Array(m+1).fill(0).map(_=>new Array(n+1).fill(0));
    
    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            preSum[i][j]=mat[i-1][j-1]+preSum[i-1][j]+preSum[i][j-1]-preSum[i-1][j-1];
        }
    }

    // console.log(preSum);

    let ans=0;
    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            for(let k=1; k<=Math.min(i, j); k++){
                let rect=preSum[i][j]-preSum[i][j-k]-preSum[i-k][j]+preSum[i-k][j-k];
                // console.log(i, j, k, rect);
                if(rect<=threshold){
                    ans=Math.max(ans, k);
                }
            }
        }
    }
    return ans;
};