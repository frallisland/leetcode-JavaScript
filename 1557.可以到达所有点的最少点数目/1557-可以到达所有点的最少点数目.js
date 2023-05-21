/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let indeg=new Array(n).fill(0);
    for(let [_, y] of edges){
        indeg[y]++;
    }
    let ans=[];
    for(let i=0; i<n; i++){
        if(!indeg[i]){
            ans.push(i);
        }
    }
    return ans;
};