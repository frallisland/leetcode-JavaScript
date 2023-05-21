/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    nums.sort((a, b)=>a-b);
    const n=nums.length, MOD=BigInt(10**9+7);

    function findIndex(l, r, tar) {
        if(nums[l]>tar) return l-1;

        while (l < r) {
            let m = Math.floor((l + r+1) / 2);
            if (nums[m] > tar) {
                r = m - 1;
            } else {
                l = m;
            }
        }
        return r;
    }

    function mypow(len){
        let ans=1n, x=2n;
        while(len){
            if(len&1) ans=(ans*x)%MOD;
            x=x*x;
            len>>=1;
        }
        return ans%MOD;
    }
    // function mypow(len){
    //     if(len===0) return BigInt(1);
    //     let x=mypow(Math.floor(len/2));
    //     return len%2?BigInt(x)*BigInt(x)*2n:BigInt(x)*BigInt(x);
    // }

    let ans=0n;
    for(let i=0; i<n; i++){
        if(nums[i]*2>target) break;
        let left=findIndex(i+1, n-1, target-nums[i]);
        // console.log(left, mypow(left-i));
        ans=(ans+mypow(left-i))%MOD;
    }

    return ans;
};