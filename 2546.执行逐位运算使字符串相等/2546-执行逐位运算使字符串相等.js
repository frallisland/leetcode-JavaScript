/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
var makeStringsEqual = function(s, target) {
    const n=s.length;
    let cnt1=0, cnt2=0;
    for(let i=0; i<n; i++){
        if(s[i]==='1') cnt1++;
        if(target[i]==='1') cnt2++;
    }
    return (!cnt1 && cnt1===cnt2) || (cnt1 && cnt2);
};