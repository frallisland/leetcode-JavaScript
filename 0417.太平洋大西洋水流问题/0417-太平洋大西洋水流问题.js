/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
function help(g, q, hs){
    while(q.length){
        let [x, y]=q.shift();
        g[x][y]=true;
        for(let [nx, ny] of [[x, y+1], [x+1, y], [x, y-1], [x-1, y]]){
            if(nx>=0 && nx<g.length && ny>=0 && ny<g[0].length && hs[nx][ny]>=hs[x][y] && !g[nx][ny]){
                q.push([nx, ny]);
            }
        }
    }
}
var pacificAtlantic = function(hs) {
    const m=hs.length, n=hs[0].length;
    let p=new Array(m).fill(0).map(_=>new Array(n).fill(false)), 
          a=new Array(m).fill(0).map(_=>new Array(n).fill(false));
    
    let q1=[], q2=[];
    for(let j=0; j<n; j++) q1.push([0 ,j]), q2.push([m-1, j]);
    for(let i=0; i<m; i++) q1.push([i ,0]), q2.push([i, n-1]);

    help(p, q1, hs);
    help(a, q2, hs);
    
    let ans=[];
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(p[i][j] && a[i][j]){
                ans.push([i, j]);
            }
        }
    }
    return ans;
};