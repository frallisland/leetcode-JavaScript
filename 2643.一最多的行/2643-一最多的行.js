/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    const m=mat.length, n=mat[0].length;
    let cnt=new Array(m).fill(0);
    
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            cnt[i]+=mat[i][j];
        }
    }
    
    let idx=-1, mx=-1;
    for(let i=0; i<m; i++){
        if(cnt[i]>mx){
            idx=i;
            mx=cnt[i];
        }
    }
    return [idx, mx];
};