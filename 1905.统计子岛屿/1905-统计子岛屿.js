/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(g1, g2) {
    const m=g1.length, n=g1[0].length;
    
    function bfs(x, y){
        let q=[[x, y]];
        g2[x][y]=0;
        let flag=(g1[x][y]?true:false);

        while(q.length){
            const l=q.length;
            for(let i=0; i<l; i++){
                let [x, y]=q.shift();
                for(let [nx, ny] of [[x, y+1], [x+1, y], [x, y-1], [x-1, y]]){
                    if(nx>=0 && nx<m && ny>=0 && ny<n && g2[nx][ny]){
                        g2[nx][ny]=0;
                        q.push([nx, ny]);
                        if(!g1[nx][ny]) flag=false;
                    }
                }
            }
        }
        return flag;
    }

    let ans=0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(g2[i][j]){
                ans+=bfs(i, j);
            }
        }
    }
    return ans;
};