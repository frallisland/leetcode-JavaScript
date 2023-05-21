/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let _sum=0, acc=1;
    while(n){
        let r=n%10;
        _sum+=r;
        acc*=r;
        n=Math.floor(n/10);
    }
    return acc-_sum;
};