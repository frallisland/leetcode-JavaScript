/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    let degs=new Array(n).fill(0), g=new Array(n).fill(0).map(_=>new Array());
    for(let [x, y] of roads){
        degs[x]++;
        degs[y]++;
        g[x].push(y);
        g[y].push(x);
    }

    let ans=0;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            let t=degs[i]+degs[j]+(g[i].includes(j)?-1:0);
            ans=Math.max(ans, t);
        }
    }
    return ans;
};