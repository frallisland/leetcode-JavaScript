/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var countPartitions = function(nums, k) {
    if(_.sum(nums)<2*k) return 0;
    const MOD=1000000007;
    let f=new Array(k).fill(0);
    f[0]=1;
    let ans=1;

    function mypow(base, ep){
        let ans=1;
        while(ep){
            if(ep&1) ans=ans*base%MOD;
            base=base*base;
            ep>>=1;
        }
        return ans;
    }
    for(let x of nums){
        ans=ans*2%MOD;
        for(let j=k-1; j>=x; j--){
            f[j]=(f[j]+f[j-x])%MOD;
        }
    }

    return (mypow(2, nums.length)-_.sum(f)*2%MOD+MOD)%MOD;
};