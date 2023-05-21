/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    const n=s.length;
    const MOD=1000000007;
    let ans=0;
    let l=0, r=0;
    for(; r<n; r++){
        if(s[r]!==s[l]){
            let len=r-l;
            ans=(ans+(Math.floor((len+1)*len/2)%MOD))%MOD;
            l=r;
        }
    }
    ans=(ans+(Math.floor((r-l+1)*(r-l)/2)%MOD))%MOD;
    return ans;
};