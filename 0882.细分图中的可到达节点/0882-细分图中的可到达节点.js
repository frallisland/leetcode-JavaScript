/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
function dijkstra(g, start){
    const n=g.length;
    let dist=new Array(n).fill(Infinity);
    dist[start]=0;
    let h=[[0, start]];
    while(h.length){
        let [d, x]=h.shift();
        for(let [y, wt] of g[x]){
            let newD=dist[x]+wt;
            if(newD<dist[y]){
                dist[y]=newD;
                h.push([newD, y]);
            }
        }
    }
    return dist;
}

var reachableNodes = function(edges, maxMoves, n) {
    let g=new Array(n).fill(0).map(x=>new Array());
    for(let [u, v, cnt] of edges){
        g[u].push([v, cnt+1]);
        g[v].push([u, cnt+1]);
    }
    let dist=dijkstra(g, 0);
    let ans=0;
    for(let d of dist){
        if(d<=maxMoves){
            ans++;
        }
    }

    for(let [u, v, cnt] of edges){
        let a=Math.max(maxMoves-dist[u], 0);
        let b=Math.max(maxMoves-dist[v], 0);

        ans+=Math.min(a+b, cnt);
    }
    return ans;
};