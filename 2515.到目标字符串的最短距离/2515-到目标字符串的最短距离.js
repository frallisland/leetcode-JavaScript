/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    const n=words.length;
    let ans=Infinity;
    for(let i=0; i<n; i++){
        if(words[i]===target){
            let d1=Math.abs(i-startIndex);
            let d2=n-d1;
            ans=Math.min(ans, Math.min(d1, d2));
        }
    }
    return ans===Infinity?-1:ans;
};