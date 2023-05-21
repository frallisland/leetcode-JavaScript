/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    let g=new Array(n+1).fill(0).map(x=>new Array());
    let visit=new Array(n+1).fill(0);
    
    for(let [u, v, d] of roads){
        g[u].push([v, d]);
        g[v].push([u, d]);
    }
    
    let res=Infinity;
    function dfs(x){
        visit[x]=1;
        for(let [y, d] of g[x]){            
            res=Math.min(res, d);
            if(!visit[y]){
                dfs(y);
            }
        }
    }
    
    dfs(1);
    return res;
};