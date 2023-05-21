/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
    const n=edges.length;
    let vis=new Array(n).fill(0);
    let ans=-1;
    for(let i=0; i<n; i++){
        if(vis[i]) continue;
        let mp=new Map();
        for(let x=i, d=0; ;x=edges[x], d++){
            if(x==-1) break;
            if(vis[x]){
                if(mp.has(x)){
                    ans=Math.max(ans, d-mp.get(x));
                }
                break;
            }
            vis[x]=1;
            mp.set(x, d);
        }
    }
    return ans;
};