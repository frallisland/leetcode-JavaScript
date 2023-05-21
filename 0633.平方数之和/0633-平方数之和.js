/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    function check(num){
        let a=Math.floor(Math.sqrt(num));
        return a*a===num;
    }

    for(let i=0; i<=Math.sqrt(c); i++){
        let a=i*i;
        let b=c-a;
        if(check(a) && check(b)) return true;
    }
    return false;
};