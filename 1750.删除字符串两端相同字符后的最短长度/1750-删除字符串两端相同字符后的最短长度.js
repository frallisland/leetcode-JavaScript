/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    const n=s.length;
    let l=0, r=n-1;
    while(l<r){
        let t=s[l];
        if(s[l]!==t || s[r]!==t) break;
        while(l<=r && s[l]===t){
            l++;
        }
        while(l<=r && s[r]===t){
            r--;
        }
    }
    return l<=r?r-l+1:0;
};