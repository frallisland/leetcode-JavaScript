/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(g) {
    let ans=0;
    const m=g.length, n=g[0].length;

    function dfs(x, y, mark){
        let cnt=1;
        g[x][y]=mark;

        for(let [nx, ny] of [[x, y+1], [x+1, y], [x, y-1], [x-1, y]]){
            if(nx>=0 && nx<m && ny>=0 && ny<n && g[nx][ny]===1){
                cnt+=dfs(nx, ny, mark);
            }
        }
        return cnt;
    }

    let idx=2;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(g[i][j]===1){
                ans=Math.max(ans, dfs(i, j, idx))
                idx++;
            }
        }
    }
    return ans;
};