/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    const m=mat.length, n=mat[0].length;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            let x=mat[i][j];
            let up=i-1<0?-1:mat[i-1][j];
            let down=i+1>=m?-1:mat[i+1][j];
            let left=j-1<0?-1:mat[i][j-1];
            let right=j+1>=n?-1:mat[i][j+1];

            if(up<x && right<x && down<x && left<x) return [i ,j];
        }
    }
    return [-1, -1];
};