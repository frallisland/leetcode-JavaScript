/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(g) {
    const m=g.length, n=g[0].length;

    if(g[0][0] || g[m-1][n-1]) return -1;
    let q=[[0, 0]];
    g[0][0]=1;

    while(q.length){
        const l=q.length;
        for(let i=0; i<l; i++){
            let [x, y]=q.shift();
            for(let [nx, ny] of [[x, y+1], [x+1, y+1], [x+1, y], [x+1, y-1], [x, y-1], [x-1, y-1], [x-1, y+1], [x-1, y]]){
                if(nx>=0 && nx<m && ny>=0 && ny<n && !g[nx][ny]){
                    g[nx][ny]=g[x][y]+1;
                    q.push([nx, ny]);
                }
            }
        }
    }
    return g[m-1][n-1]?g[m-1][n-1]:-1;
};