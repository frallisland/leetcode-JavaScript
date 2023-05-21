/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const n=grid.length;
    let d=n-3;

    let ans=new Array(n-2).fill(0).map(_=>new Array(n-2).fill(0));

    function area_max(x, y){
        let res=-1;
        for(let i=x; i<x+3; i++){
            for(let j=y; j<y+3; j++){
                res=Math.max(res, grid[i][j]);
            }
        }
        return res;
    }

    for(let i=0; i<n-2; i++){
        for(let j=0; j<n-2; j++){
            ans[i][j]=area_max(i, j);
        }
    }

    return ans;
};