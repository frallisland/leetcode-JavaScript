/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const m=mat.length, n=mat[0].length;

    if(m*n!==r*c) return mat;
    
    let arr=new Array(r).fill(0).map(_=>new Array(c).fill(0));
    

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            let idx=i*n+j;
            let ai=Math.floor(idx/c), aj=idx%c;
            arr[ai][aj]=mat[i][j];
        }
    }
    return arr;
};