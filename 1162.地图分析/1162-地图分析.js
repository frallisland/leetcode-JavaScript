/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(g) {
    const m=g.length, n=g[0].length;
    let dist=new Array(m).fill(0).map(x=>new Array(n).fill(0));

    let q=[];
    for(let x=0; x<m; x++){
        for(let y=0; y<n; y++){
            if(g[x][y]){
                q.push([x, y, 0]);
            }
        }
    }

    while(q.length){
        let [x, y, d]=q.shift();
        for(let [nx, ny] of [[x, y+1], [x+1, y], [x, y-1], [x-1, y]]){
            if(nx>=0 && nx<m && ny>=0 && ny<n && !g[nx][ny] && !dist[nx][ny]){
                dist[nx][ny]=d+1;
                q.push([nx, ny, d+1]);
            }
        }
    }

    let ans=-1;
    for(let t of dist){
        for(let v of t){
            ans=Math.max(v, ans);
        }
    }
    return ans?ans:-1;
};