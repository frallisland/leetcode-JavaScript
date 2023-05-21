/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(g) {
    const m=g.length, n=g[0].length;
    
    function dfs(x, y, t){
        g[x][y]=t;

        for(let [nx, ny] of [[x, y+1], [x+1, y], [x, y-1], [x-1, y]]){
            if(nx>=0 && nx<m && ny>=0 && ny<n && !g[nx][ny]){
                dfs(nx, ny, t);
            }
        }
    }

    for(let i=0; i<m; i++){
        if(!g[i][0]) dfs(i, 0, 1);
        if(!g[i][n-1]) dfs(i, n-1, 1);
    }

    for(let j=0; j<n; j++){
        if(!g[0][j]) dfs(0, j, 1);
        if(!g[m-1][j]) dfs(m-1, j, 1);
    }

    let cnt=0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(!g[i][j]){
                dfs(i, j, 1);
                cnt++;
            }
        }
    }
    return cnt;
};