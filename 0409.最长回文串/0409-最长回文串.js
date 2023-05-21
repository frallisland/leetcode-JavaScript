/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let ans=0;
    let map=new Map();
    for(let ch of s){
        map.set(ch, (map.get(ch)||0)+1);
    }
    for(let [_, v] of map){
        ans+=Math.floor(v/2)*2;
    }
    return ans===s.length?ans:ans+1;
};