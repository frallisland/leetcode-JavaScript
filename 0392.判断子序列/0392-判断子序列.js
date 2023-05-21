/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(!s.length && !t.length) return true;
    let i=0, j=0;
    while(j<t.length){
        if(s[i]===t[j]) i++;
        if(i===s.length) return true;
        j++;
    }
    return false;
};