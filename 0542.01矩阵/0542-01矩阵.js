/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m=mat.length, n=mat[0].length;
    let dist=new Array(m).fill(0).map(_=>new Array(n).fill(0));

    let q=[];
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(!mat[i][j]){
                q.push([i, j])
            }
        }
    }

    let cnt=0;
    while(q.length){
        const l=q.length;
        for(let i=0; i<l; i++){
            let [x, y]=q.shift();
            if(!dist[x][y]) dist[x][y]=cnt;
            for(let [nx, ny] of [[x, y+1],  [x+1, y], [x, y-1], [x-1, y]]){
                if(nx>=0 && nx<m && ny>=0 && ny<n && mat[nx][ny] && !dist[nx][ny]){
                    q.push([nx, ny]);
                }
            }
        }
        cnt++;
    }
    return dist;
};