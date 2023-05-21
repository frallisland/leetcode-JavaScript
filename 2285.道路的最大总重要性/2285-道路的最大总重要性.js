/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    let deg=new Array(n).fill(0);
    for(let [x, y] of roads){
        deg[x]++;
        deg[y]++;
    }

    deg.sort((a, b)=>a-b);
    let res=0;
    deg.forEach((v, i)=>{
        res+=v*(i+1);
    })
    return res;
};