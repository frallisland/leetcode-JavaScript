/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
 function gcd(a, b){
     if(a%b===0) return b;
     return gcd(b, a%b);
 }
var canMeasureWater = function(x, y, z) {
    if(x+y<z) return false;
    if(x===0 || y===0) return z===0 || x+y===z;
    return z%gcd(x, y)===0;
};