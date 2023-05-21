/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const n=arr.length, MOD=1000000007;
    let left=[-1], right=[n],stk=[0];
    for(let i=1; i<n; i++){
        while(arr[stk[stk.length-1]]>=arr[i]){
            stk.pop();
        }
        if(stk.length){
            left.push(stk[stk.length-1]);
        }else{
            left.push(-1);
        }
        stk.push(i);
    }
    stk=[n-1];
    for(let i=n-2; i>=0; i--){
        while(arr[stk[stk.length-1]]>arr[i]){
            stk.pop();
        }
        if(stk.length){
            right.unshift(stk[stk.length-1]);
        }else{
            right.unshift(n);
        }
        stk.push(i);
    }
    console.log(left, right);
    let ans=0;
    for(let i=0; i<n; i++){
        ans=(ans+(arr[i]*((i-right[i])*(left[i]-i))%MOD)%MOD)%MOD;
    }
    return ans;
};