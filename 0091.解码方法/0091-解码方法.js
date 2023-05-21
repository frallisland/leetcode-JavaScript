/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n=s.length;
    let dp=new Array(n+1).fill(0);
    dp[0]=1;
    if(parseInt(s[0])>0 && parseInt(s[0])<=9){
        dp[1]=1;
    }

    for(let i=2; i<=n; i++){
        if(s[i-1]!=='0') dp[i]=dp[i-1];
        if(parseInt(s[i-2]+s[i-1])<=26 && s[i-2]!=='0'){
            dp[i]+=dp[i-2];
        }
    }
    // console.log(dp);
    return dp[n];
};