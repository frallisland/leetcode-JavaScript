/**
 * @param {string} s
 * @return {number}
 */
let lcp=new Array(4010).fill(0).map(()=>new Array(4010).fill(0));
var deleteString = function(s) {
    const n=s.length;
    
    for(let i=0; i<n; i++)
        for(let j=0; j<n; j++)
            lcp[i][j]=0;
    
    for(let i=n-1; i>=0; i--){
        for(let j=n-1; j>=0; j--){
            if(s[i]===s[j]){
                lcp[i][j]=1;
                if(i+1<n && j+1<n){
                    lcp[i][j]+=lcp[i+1][j+1];
                }
            }
        }
    }
    
    let dp=new Array(n+1).fill(0);
    for(let i=n-1; i>=0; i--){
        dp[i]=1;
        for(let j=1; j<=(n-i)/2; j++){
            if(lcp[i][i+j]>=j){
                dp[i]=Math.max(dp[i], dp[i+j]+1);
            }
        }
    }
    return dp[0];
};