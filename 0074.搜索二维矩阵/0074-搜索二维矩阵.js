/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m=matrix.length, n=matrix[0].length;
    let sx=0, sy=n-1;
    
    while(sx<m && sy>=0){
        if(matrix[sx][sy]===target) return true;

        if(matrix[sx][sy]>target){
            sy--;
        }else{
            sx++;
        }
    }
    return false;
};