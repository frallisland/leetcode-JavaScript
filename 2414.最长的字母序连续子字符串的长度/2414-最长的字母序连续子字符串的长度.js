/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
    let ans=1;
    for(let l=0, r=1; r<s.length;){
        if(s[r].charCodeAt()-s[r-1].charCodeAt()!==1){
            l=r;
        }
        ans=Math.max(ans, r-l+1);
        r++;
    }
    return ans;
};