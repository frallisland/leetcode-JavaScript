/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findShortestCycle = function(n, edges) {
    let g=new Map();

    for(let i=0; i<n; i++){
        g.set(i, []);
    }

    for(let [a, b] of edges){
        g.get(a).push(b);
        g.get(b).push(a);
    }

    function bfs(st){
        let dis=new Array(n).fill(-1);
        dis[st]=0;
        let q=[[st, -1]];

        while(q.length){
            let [x, fa]=q.shift();
            for(let y of g.get(x)){
                if(dis[y]<0){
                    dis[y]=dis[x]+1;
                    q.push([y, x]);
                }else if(y!==fa){
                    return dis[x]+dis[y]+1;
                }
            }
        }
        return Number.MAX_VALUE;
    }

    let dist=new Array(n).fill(0).map((_, i)=>bfs(i));
    return _.min(dist)>1010?-1:_.min(dist);
};