/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let set=new Set();
    for(let p of points){
        set.add(p[0]);
    }

    let ps=Array.from(set);
    ps.sort((a, b)=>a-b);
    let ans=0;
    for(let i=0; i<ps.length-1; i++){
        ans=Math.max(ans, ps[i+1]-ps[i]);
    }
    return ans;
};