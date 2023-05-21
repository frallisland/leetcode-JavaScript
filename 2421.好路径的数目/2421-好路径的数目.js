var numberOfGoodPaths = function(vals, edges) {
    const n=vals.length;
    let f=new Array(n).fill(0)  // 并查集
    let c=new Array(n).fill(0)  // 计数
    let d=new Array(n).fill(0)  // 
    let a=new Array(n).fill(0).map(x=>new Array()); // 建图
    
    for(let i=0; i<edges.length; i++){
        a[edges[i][0]].push(edges[i][1])
        a[edges[i][1]].push(edges[i][0])
    }
    
    function dfs(x){
        return f[x]!==x?f[x]=dfs(f[x]):x;
        // if(f[x]!==x) f[x]=dfs(f[x]);
        // return f[x];
    }
    function union(x, y){
        x=dfs(x);
        y=dfs(y);
        if(x===y){
            return;
        }
        f[x]=y;
        c[y]+=c[x];
    }
    
    let g=new Map()
    for(let i=0; i<n; i++){
        let vs=g.get(vals[i])||[]
        vs.push(i)
        g.set(vals[i], vs)
        f[i]=i
    }
    
    let arr=Array.from(g).sort((a, b)=>a[0]-b[0])
    g.clear()
    for(let i=0; i<arr.length; i++){
        g.set(arr[i][0], arr[i][1])
    }
    
    let ans=BigInt(0)
    for(let [k, v] of g){
        for(let j of v){
            c[j]=1
            // bfs
            for(let next of a[j]){
                // 合并子集
                if(c[next]>0){
                    union(j, next)
                }
            }
        }
        // 根节点设置为0
        for(let j of v){
            d[dfs(j)]=0
        }
        for(let j of v){
            ++d[dfs(j)];
            ans+=BigInt(d[dfs(j)])
        }
    }
    return ans
};