/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function(nums) {
    function gcd(a, b){
        if(a%b===0) return b;
        return gcd(b, a%b);
    }
    let x=nums[0];
    for(let i=1; i<nums.length; i++){
        x=gcd(x, nums[i]);
    }
    return x===1;
};