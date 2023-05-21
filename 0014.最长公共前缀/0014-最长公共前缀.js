/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const n=strs.length;
    if(n===1){
        return strs[0];
    }
    strs.sort((a, b)=>a.length-b.length);
    function lcp(str1, str2){
        let minLen=Math.min(str1.length, str2.length);
        let idx=0;
        for(; idx<minLen; idx++){
            if(str1[idx]!==str2[idx]){
                break;
            }
        }
        return str1.substr(0, idx);
    }
    let prefix=lcp(strs[0], strs[1]);
    for(let i=2; i<n; i++){
        prefix=lcp(prefix, strs[i]);
    }
    return prefix;
};