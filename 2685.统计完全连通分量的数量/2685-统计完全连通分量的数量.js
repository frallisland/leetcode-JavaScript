/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    const p=new Array(n).fill(0).map((_, i)=>i)
    const g=new Array(n).fill(0).map(_=>new Array(n).fill(0))
    
    
    function find(x){
        if(p[x]!==x) p[x]=find(p[x])
        return p[x]
    }
    for(let [a, b] of edges){
        p[find(a)]=find(b)
        g[a][b]=1
        g[b][a]=1
    }
    
    let map=new Map()
    for(let i=0; i<n; i++){
        let tpi=find(i)
        if(!map.has(tpi)){
            map.set(tpi, [i])
        }else{
            map.get(tpi).push(i);
        }
    }
    
    function comb(a, b){
        let up=1, low=1
        a=Math.min(a, b-a)
        for(let i=1; i<=a; i++){
            low*=i
            up*=(b-i+1)
        }
        return Math.floor(up/low)
    }
    
    function check(arr){
        const tn=arr.length
        let edges=0
        for(let i=0; i<tn; i++){
            for(let j=0; j<tn; j++){
                let a=arr[i], b=arr[j]
                if(g[a][b]){
                    edges++
                }
            }
        }
        return Math.floor(edges/2)===Math.floor((tn-1)*tn/2)
    }
    
    let ans=0
    for(let [a, b] of map){
        if(check(b)){
            ans++
        }
    }

    return ans
};