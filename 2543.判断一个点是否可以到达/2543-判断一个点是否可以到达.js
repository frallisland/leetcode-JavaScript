/**
 * @param {number} targetX
 * @param {number} targetY
 * @return {boolean}
 */
var isReachable = function(X, Y) {
    
    function gcd(x, y){
        if(x%y===0) return y;
        return gcd(y, x%y);
    }
    while((X&1)!==1){
        X=Math.floor(X/2);
    }
    while((Y&1)!==1){
        Y=Math.floor(Y/2);
    }
    console.log(X, Y);
    return gcd(X, Y)===1;
};