/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const [m, n]=[mat.length, mat[0].length];
    let row=new Array(m).fill(0);
    let col=new Array(n).fill(0);

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            row[i]+=mat[i][j];
            col[j]+=mat[i][j];
        }
    }
    let ans=0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(row[i]===1 && col[j]===1 && mat[i][j]===1){
                ans++;
                break;
            }
        }
    }
    return ans;
};