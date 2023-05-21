var numberOfWays = function(st, ed, k) {
    let dif=ed-st+1;
    const MOD=1000000007;
    // 走k步到指定位置
    let dp=new Array(k+1).fill(0).map(x=>new Array(4020).fill(0));
    
    // 0->2000, 
    let new_st=st+2000;
    let new_ed=ed+2000;
    dp[0][new_st]=1;
    for(let i=1; i<=k; i++){
        for(let j=1; j<4000; j++){
            let pre=j-1, aft=j+1;
            dp[i][j]=(dp[i-1][pre]+dp[i-1][aft])%MOD;
        }
    }
    return dp[k][new_ed];
};