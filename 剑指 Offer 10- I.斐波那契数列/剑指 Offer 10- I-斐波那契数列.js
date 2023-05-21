/**
 * @param {number} n
 * @return {number}
 */
 let f=new Array(110).fill(-1);

var fib = function(n) {
    if(n===0 || n===1) return f[n]=n;
    if(f[n]!==-1) return f[n];
    return f[n]=(fib(n-1)+fib(n-2))%1000000007
};