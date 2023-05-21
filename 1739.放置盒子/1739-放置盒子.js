/**
 * @param {number} n
 * @return {number}
 */
var minimumBoxes = function(n) {
    let x=Math.floor(Math.cbrt(6*n));
    let ans=Math.floor(x*(x+1)/2);
    let maxn=Math.floor(x*(x+1)*(x+2)/6);
    if(maxn>n){
        maxn-=ans;
        ans-=x;
    }
    return ans+Math.ceil((-1+Math.sqrt(1+8*(n-maxn)))/2);
};