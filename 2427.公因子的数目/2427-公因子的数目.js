/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    if(a<b) [a, b]=[b, a];
    let ans=0;
    function gcd(a, b){
        if(a%b==0) return b;
        return gcd(b, a%b);
    }

    let mx=gcd(a, b);

    for(let i=1; i<=mx; i++){
        if(a%i==0 && b%i==0){
            ans++;
        }
    }
    return ans;
};