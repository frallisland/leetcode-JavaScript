/**
 * @param {number[][]} grid
 * @return {number}
 */
function dfs(g, x, y, t){
    g[x][y]=t;
    for(let [nx, ny] of [[x, y+1], [x+1, y], [x, y-1], [x-1, y]]){
        if(nx>=0 && nx<g.length && ny>=0 && ny<g[0].length && g[nx][ny]===1){
            dfs(g, nx, ny, t);
        }
    }
}

var numEnclaves = function(g) {
    const m=g.length, n=g[0].length;

    for(let i=0; i<m; i++){
        if(g[i][0]) dfs(g, i, 0, 0); 
        if(g[i][n-1]) dfs(g, i, n-1, 0);
    }

    for(let j=0; j<n; j++){
        if(g[0][j]) dfs(g, 0, j, 0);
        if(g[m-1][j]) dfs(g, m-1, j, 0);
    }

    let ans=0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(g[i][j]===1){
                ans++;
            }
        }
    }
    return ans;
};