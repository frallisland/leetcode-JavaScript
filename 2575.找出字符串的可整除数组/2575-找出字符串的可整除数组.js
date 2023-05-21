/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function(word, m) {
    const n=word.length;
    let ans=new Array(n).fill(0);
    
    let pre=(parseInt(word[0])%m);
    
    if(!pre) ans[0]=1;
    
    for(let i=1; i<n; i++){
        pre=(pre*10+parseInt(word[i]))%m;
        if(!pre) ans[i]=1;
    }
    return ans;
};