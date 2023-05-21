/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let real=s.replace(/[^\w]|_/g, '').toLocaleLowerCase();
    for(let l=0, r=real.length-1; l<r; l++, r--){
        if(real[l]!==real[r]){
            return false;
        }
    }
    return true;
};