/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    const m=mat.length, n=mat[0].length;
    let pre=new Array(m+1).fill(0).map(_=>new Array(n+1).fill(0));
    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            pre[i][j]=mat[i-1][j-1]+pre[i-1][j]+pre[i][j-1]-pre[i-1][j-1];
        }
    }

    let ans=new Array(m).fill(0).map(_=>new Array(n).fill(0));
    // console.log(pre);
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            let left_upper_x=Math.max(i-k, 0)+1, left_upper_y=Math.max(j-k, 0)+1;
            let right_low_x=Math.min(m-1, i+k)+1, right_low_y=Math.min(n-1, j+k)+1;

            let b_x=left_upper_x-1, b_y=right_low_y;
            let c_x=right_low_x, c_y=left_upper_y-1;
            let d_x=left_upper_x-1, d_y=left_upper_y-1;
            // console.log([i, j], [b_x, b_y], [c_x, c_y], [d_x, d_y]);
            ans[i][j]=pre[right_low_x][right_low_y]-pre[b_x][b_y]-pre[c_x][c_y]+pre[d_x][d_y];
        }
    }
    return ans;
};