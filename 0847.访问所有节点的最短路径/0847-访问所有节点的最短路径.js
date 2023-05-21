/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    const n=graph.length;
    let visit=new Array(n).fill(0).map(_=>new Array(1<<n));

    let q=[];
    for(let i=0; i<n; i++){
        q.push([i, 1<<i, 0]);
        visit[i][1<<i]=1;
    }

    let ans=-1;
    while(q.length){
        let [u, s, d]=q.shift();
        if(s===(1<<n)-1){
            ans=d;
            break;
        }
        for(let v of graph[u]){
            const mask=s|(1<<v);
            if(!visit[v][mask]){
                q.push([v, mask, d+1]);
                visit[v][mask]=1;
            }
        }
    }
    return ans;
};