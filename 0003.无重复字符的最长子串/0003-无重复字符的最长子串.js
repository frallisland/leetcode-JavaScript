/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans='', cnt=new Set();
    let l=0, r=0;
    for(; r<s.length; r++){
        while(l<r && cnt.has(s[r])){
            cnt.delete(s[l]);
            l++;
        }
        cnt.add(s[r]);
        ans=Math.max(ans, r-l+1);
    }
    return ans;
};