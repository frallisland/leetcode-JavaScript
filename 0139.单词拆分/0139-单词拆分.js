/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n=s.length;
    let dp=new Array(n+1).fill(false);
    dp[0]=true;

    for(let i=1; i<=n; i++){
        for(let word of wordDict){
            if(word.length>i) continue;

            let pre=i-word.length;
            if(dp[pre] && s.substring(pre, i)===word){
                dp[i]=true;
            }
        }
    }
    return dp[n];
};