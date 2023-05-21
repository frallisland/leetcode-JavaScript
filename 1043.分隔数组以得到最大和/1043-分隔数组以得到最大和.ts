function maxSumAfterPartitioning(arr: number[], k: number): number {
    const n:number=arr.length
    const dp:number[]=new Array(n+1).fill(0)
    
    for(let i:number=1; i<=n; i++){
        let mx:number=arr[i-1];
        for(let j:number=i; j>Math.max(0, i-k); j--){
            mx=Math.max(arr[j-1], mx);
            dp[i]=Math.max(dp[i], dp[j-1]+mx*(i-j+1));
        }
    }
    return dp[n];
};