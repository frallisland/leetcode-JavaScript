/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let q=[];
    const [m, n]=[matrix.length, matrix[0].length];
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(matrix[i][j]===0){
                q.push([i, j]);
            }
        }
    }

    while(q.length){
        let [x, y]=q.shift();

        for(let j=0; j<n; j++){
            matrix[x][j]=0;
        }
        for(let i=0; i<m; i++){
            matrix[i][y]=0;
        }
    }
    
};