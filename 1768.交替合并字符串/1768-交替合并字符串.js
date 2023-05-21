/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let index=0;
    const m=word1.length, n=word2.length;
    let ans='';
    for(; index<Math.min(m, n); index++){
        ans+=word1[index]+word2[index];
    }
    if(index<m) ans+=word1.substring(index);
    if(index<n) ans+=word2.substring(index);
    return ans;
};