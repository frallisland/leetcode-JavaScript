/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const m=triangle.length;
    for(let i=1; i<m; i++){
        let level=triangle[i].length;
        for(let j=0; j<level; j++){
            let left = triangle[i-1][j-1]===undefined?Infinity:triangle[i-1][j-1];
            let right = triangle[i-1][j]===undefined?Infinity:triangle[i-1][j];

            triangle[i][j]+=Math.min(left, right);
        }
    }
    return Math.min(...triangle[m-1]);
};