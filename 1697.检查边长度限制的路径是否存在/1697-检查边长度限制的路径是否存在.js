/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
    const p=new Array(n).fill(0).map((_, i)=>i);
    
    let idxs=new Array(queries.length).fill(0).map((_, i)=>i);
    idxs.sort((a, b)=>queries[a][2]-queries[b][2]);

    edgeList.sort((a, b)=>a[2]-b[2]);
    
    function find(x){
        if(x!==p[x]) p[x]=find(p[x]);
        return p[x];
    }
    function merge(x, y){
        x=find(x);
        y=find(y);
        p[x]=y;
    }

    let res=new Array(queries.length).fill(false), k=0;
    for(let i of idxs){
        while(k<edgeList.length && edgeList[k][2]<queries[i][2]){
            merge(edgeList[k][0], edgeList[k][1]);
            k++;
        }
        if(find(queries[i][0])===find(queries[i][1])) res[i]=true;
    }
    return res;
};