/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(g) {
    const m=g.length, n=g[0].length;
    for(let v of g){
        v.sort((a, b)=>a-b);
    }
    let ans=0;
    for(let i=0; i<n; i++){
        let t=0;
        for(let j=0; j<m; j++){
            t=Math.max(t, g[j][i]);
        }
        ans+=t;
    }
    return ans;
};