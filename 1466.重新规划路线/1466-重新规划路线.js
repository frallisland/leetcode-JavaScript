/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let visit=new Array(n).fill(0), g=new Array(n).fill(0).map(_=>new Array());
    let edges=new Set();

    for(let [x, y] of connections){
        g[x].push(y);
        g[y].push(x);
        edges.add(x.toString()+','+y.toString());
    }

    let q=[0], ans=0;
    visit[0]=1;
    while(q.length){
        let x=q.shift();
        for(let y of g[x]){
            if(visit[y]) continue;
            let token=x.toString()+','+y.toString();
            if(edges.has(token)){
                ans++;
            }
            visit[y]=1;
            q.push(y);
        }
    }
    return ans;
};