/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, es, s, d) {
    let g=new Array(n).fill(0).map(X=>new Array());

    for(let [a, b] of es){
        g[a].push(b);
        g[b].push(a);
    }

    let visit=new Array(n).fill(0);
    let q=[s];
    visit[s]=1;

    while(q.length){
        let node=q.shift();
        if(node===d) return true;
        for(let next of g[node]){
            if(!visit[next]){
                q.push(next);
                visit[next]=1;
            }
        }
    }
    return false;
};