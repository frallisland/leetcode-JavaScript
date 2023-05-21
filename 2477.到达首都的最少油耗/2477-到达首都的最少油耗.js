/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
    const n=roads.length;
    let res=0, g=new Array(n+1).fill(0).map(_=>new Array());

    for(let [a, b] of roads){
        g[a].push(b);
        g[b].push(a);
    }

    function dfs(x, fa){
        let size=1;
        for(let y of g[x]){
            if(y!==fa){
                size+=dfs(y, x);
            }
        }
        if(x){
            res+=Math.floor((size+seats-1)/seats);
        }
        return size;
    }
    dfs(0, -1);
    return res;
};