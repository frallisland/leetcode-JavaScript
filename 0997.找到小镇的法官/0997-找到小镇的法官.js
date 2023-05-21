/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let indeg=new Array(n+1).fill(0), outdeg=new Array(n+1).fill(0);
    for(let [x, y] of trust){
        outdeg[x]++;
        indeg[y]++;
    }
    for(let i=1; i<=n; i++){
        if(indeg[i]===n-1 && outdeg[i]===0){
            return i;
        }
    }
    return -1;
};