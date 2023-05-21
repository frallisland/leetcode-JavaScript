/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let lx=0, ly=0, rx=0, ry=mat[0].length-1;

    let ans=0;
    while(lx<mat.length && ly<mat[0].length){
        ans+=mat[lx][ly];
        mat[lx][ly]=0;
        lx++, ly++;
    }

    while(rx<mat.length && ry>=0){
        ans+=mat[rx][ry];
        rx++, ry--;
    }
    return ans;
};