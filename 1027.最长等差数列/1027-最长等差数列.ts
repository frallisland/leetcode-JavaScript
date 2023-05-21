function longestArithSeqLength(nums: number[]): number {
    const n:number=nums.length;

    let max_d=Math.max(...nums)-Math.min(...nums);
    let dp=new Array(n).fill(null).map(_=>new Array(max_d*2+1).fill(0));
    let ans=0;

    for(let i=0; i<n; i++){
        for(let j=i-1; j>=0; j--){
            let d=nums[i]-nums[j]+max_d;

            if(dp[i][d]===0){
                dp[i][d]=dp[j][d]+1;
                ans=Math.max(ans, dp[i][d])
            }
        }
    }
    return ans+1;
};