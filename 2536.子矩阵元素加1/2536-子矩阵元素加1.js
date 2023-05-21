/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
    let ans=new Array(n+1).fill(0).map(_=>new Array(n+1).fill(0));
 
    for(let [sx, sy, ex, ey] of queries){
        ans[sx+1][sy+1]++;
        if(ey+2<=n) ans[sx+1][ey+2]--;
        if(ex+2<=n) ans[ex+2][sy+1]--;
        if(ex+2<=n && ey+2<=n) ans[ex+2][ey+2]++;
    }

    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            ans[i][j]=ans[i][j-1]+ans[i-1][j]-ans[i-1][j-1]+ans[i][j];
        }
    }

    ans.shift();
    for(let p of ans){
        p.shift();
    }
    return ans;
};