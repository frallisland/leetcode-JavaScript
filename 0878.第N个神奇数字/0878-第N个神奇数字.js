/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function(n, a, b) {
    const MOD=1000000007;
    let l=Math.min(a, b), r=Math.min(a, b)*n;
    let ab=lcm(a, b);
    while(l<=r){
        let mid=Math.floor((l+r)/2);
        let cnt=Math.floor(mid/a)+Math.floor(mid/b)-Math.floor(mid/ab);
        if(cnt>=n){
            r=mid-1;
        }else{
            l=mid+1;
        }
    }
    return (r+1)%MOD;
};
function lcm(a, b){
    return Math.floor(a*b/gcd(a, b));
}
function gcd(a, b){
    if(a%b===0) return b;
    return gcd(b, a%b);
}