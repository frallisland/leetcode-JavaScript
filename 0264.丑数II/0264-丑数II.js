/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp=[1];
    let idx2=0, idx3=0, idx5=0;
    while(dp.length<n){
        let t2=dp[idx2]*2;
        let t3=dp[idx3]*3;
        let t5=dp[idx5]*5;

        let _min=Math.min(t2, t3, t5);
        dp.push(_min);
        if(_min===t2) idx2++;
        if(_min===t3) idx3++;
        if(_min===t5) idx5++;
    }
    return dp[n-1];
};