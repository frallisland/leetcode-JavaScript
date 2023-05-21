/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    while(n){
        let res=n%3;
        if(res==2) return false;
        n=Math.floor(n/3);
    }
    return true;
};