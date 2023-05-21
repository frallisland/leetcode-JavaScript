/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    const n=pref.length;
    let ans=0;

    for(let word of words){
        if(word.length<n) continue;
        let flag=true;

        for(let i=0; i<n; i++){
            if(word[i]!==pref[i]){
                flag=false;
                break;
            }
        }
        if(flag) ans++;
    }
    return ans;
};