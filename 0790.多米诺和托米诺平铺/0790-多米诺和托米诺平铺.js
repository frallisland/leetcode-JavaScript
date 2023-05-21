/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD=1000000007;
    if(n===0 || n===1) return 1;
    if(n===2) return 2;

    let a=1, b=1, c=2;
    for(let i=3; i<=n; i++){
        let d=(c*2+a)%MOD;
        a=b;
        b=c;
        c=d;
    }
    return c;
};