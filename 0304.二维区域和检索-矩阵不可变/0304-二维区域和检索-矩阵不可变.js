/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    const m=matrix.length, n=matrix[0].length;
    this.pre=new Array(m+1).fill(0).map(_=>new Array(n+1).fill(0));
    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            this.pre[i][j]=matrix[i-1][j-1]+this.pre[i-1][j]+this.pre[i][j-1]-this.pre[i-1][j-1];
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let ax=row2+1, ay=col1;
    let bx=row1, by=col2+1;
    return this.pre[row2+1][col2+1]-this.pre[ax][ay]-this.pre[bx][by]+this.pre[row1][col1];

};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */