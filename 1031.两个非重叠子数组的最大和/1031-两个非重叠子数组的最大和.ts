function maxSumTwoNoOverlap(nums: number[], fl: number, sl: number): number {
    const n:number=nums.length;

    let presum:number[]=new Array(n+1).fill(0);
    for(let i=1; i<=n; i++){
        presum[i]=presum[i-1]+nums[i-1];
    }

    let ans=0;
    for(let i=0; i<=n-fl-sl; i++){
        let t1=presum[i+fl]-presum[i];
        for(let j=i+fl; j<=n-sl; j++){
            let t2=presum[j+sl]-presum[j];
            ans=Math.max(t1+t2, ans);
        }
    }
    for(let i=0; i<=n-fl-sl; i++){
        let t1=presum[i+sl]-presum[i];
        for(let j=i+sl; j<=n-fl; j++){
            let t2=presum[j+fl]-presum[j];
            ans=Math.max(t1+t2, ans);
        }
    }
    return ans;
};