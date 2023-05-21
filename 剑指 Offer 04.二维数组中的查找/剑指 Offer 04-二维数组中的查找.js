/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length===0 || matrix[0].length===0) return false;
    const m=matrix.length, n=matrix[0].length;
    let sx=0, sy=n-1;
    while(sx<m && sy>=0){
        if(matrix[sx][sy]===target) return true;
        else if(matrix[sx][sy]<target) sx++;
        else sy--;
    }
    return false;
};