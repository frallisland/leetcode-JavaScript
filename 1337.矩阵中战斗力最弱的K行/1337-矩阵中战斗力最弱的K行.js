/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const m=mat.length, n=mat[0].length;
    let power=[];
    for(let i=0; i<m; i++){
        let t=0;
        for(let j=0; j<n; j++){
            t+=mat[i][j];
        }
        power.push([t, i]);
    }

    power.sort((a, b)=>a[0]-b[0]);
    let ans=[];
    for(let i=0; i<k; i++){
        ans.push(power[i][1]);
    }
    return ans;
};