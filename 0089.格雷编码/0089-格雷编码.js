/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let ans=[0];
    for(let i=1; i<=n; i++){
        for(let j=ans.length-1; j>=0; j--){
            ans.push(ans[j]|1<<(i-1));
        }
    }
    return ans;
};