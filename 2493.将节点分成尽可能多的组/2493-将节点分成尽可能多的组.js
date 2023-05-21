/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function(n, edges) {
    let g=new Array(n).fill(0).map(x=>new Array());

    for(let [x, y] of edges){
        g[x-1].push(y-1);
        g[y-1].push(x-1);
    }

    // 染色法
    let color=new Array(n).fill(0);
    function dfs(x, c, nodes){
        nodes.push(x);
        color[x]=c;
        for(let y of g[x]){
            if(color[y]===c || (color[y]===0 && !dfs(y, -c, nodes))){ // 染色冲突
                return false;
            }
        }
        return true;
    }

    // 枚举环的起点
    let clock=0, time=new Array(n).fill(0);
    function bfs(start ){
        let depth=0;
        clock++;
        time[start]=clock;
        let q=[start];
        while(q.length){
            const level=q.length;
            for(let i=0; i<level; i++){
                let x=q.shift();
                for(let y of g[x]){
                    if(time[y]!==clock){
                        time[y]=clock;
                        q.push(y);
                    }
                }
            }
            depth++;
        }
        return depth;
    }
    
    let res=0;
    for(let i=0; i<color.length; i++){
        if(color[i]) continue;
        let nodes=[];
        if(!dfs(i, 1, nodes)) return -1;
        
        let mx=-1;
        for(let node of nodes){
            mx=Math.max(mx, bfs(node));
        }
        res+=mx;
    }
    return res;
};