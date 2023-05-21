/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function(nums) {
    const MOD=1000000007, n=nums.length;
    nums.sort((a, b)=>a-b);
    let pow2=new Array(n).fill(1);
    let res=0;
    for(let i=1; i<n; i++) pow2[i]=pow2[i-1]*2%MOD;
    for(let i=0; i<n; i++){
        res=(res+nums[i]*(pow2[i]-pow2[n-i-1])%MOD)%MOD;
    }
    return res;
};