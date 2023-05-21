/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
    const m=grid.length, n=grid[0].length;
    let preCol=new Array(m).fill(0).map(_=>new Array(n+1).fill(0));
    let preRow=new Array(m+1).fill(0).map(_=>new Array(n).fill(0));

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(!grid[i][j]) continue;
            preCol[i][j+1]=preCol[i][j]+1;
            preRow[i+1][j]=preRow[i][j]+1;
        }
    }

    function check(i, j, d){
        if(preCol[i][j+1]<d || preRow[i+1][j]<d) return false;
        if(preRow[i+1][j-d+1]<d || preCol[i-d+1][j+1]<d) return false;
        return true;
    }

    // console.log(preCol, preRow);

    let ans=0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(!grid[i][j]) continue;
            for(let d=1; d<=Math.min(i+1, j+1); d++){
                  if(check(i, j, d)){
                      ans=Math.max(ans, d*d);
                  }
            }
        }
    }
    return ans;
};