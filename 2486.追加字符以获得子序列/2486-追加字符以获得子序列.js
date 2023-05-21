/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    const n=s.length, m=t.length;
    let i=0, j=0;
    for(; i<n; i++){
        if(s[i]===t[j]){
            j++;
        }
        if(j===m) break;
    }
    return m-j;
};