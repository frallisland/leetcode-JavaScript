/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    const ans=new Array(n).fill(0);
    let idx=0;
    for(let i=1; i<n-k; i++){
        ans[idx++]=i;
    }

    for(let i=n-k, j=n; i<=j; i++, j--){
        ans[idx++]=i;
        if(i!=j){
            ans[idx++]=j;
        }
    }
    return ans;
};