/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var isPossible = function(n, edges) {
    let cnt=new Array(n+1).fill(0);
    let g=new Array(n+1).fill(0).map(x=>new Set());

    for(let [a, b] of edges){
        g[a].add(b);
        g[b].add(a);
        cnt[a]++, cnt[b]++;
    }

    let ps=new Array();
    for(let i=1; i<=n; i++){
        if(cnt[i]%2){
            ps.push(i);
        }
    }

    if(ps.length===0){
        return true;
    }else if(ps.length===2){
        let [a, b]=ps;
        if(!g[a].has(b)) return true;
        for(let i=1; i<=n; i++){
            if(i!==a && i!==b && !g[a].has(i) && !g[b].has(i)){
                return true;
            }
        }
    }else if(ps.length===4){
        let [a, b, c, d]=ps;
        if((!g[a].has(b) && !g[c].has(d)) || (!g[a].has(c) && !g[b].has(d)) || (!g[a].has(d) && !g[b].has(c))){
            return true;
        }
    }
    return false;
}; 