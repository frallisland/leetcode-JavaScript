/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function(s, chars, vals) {
    let map=new Map();
    
    for(let i=0; i<26; i++){
        let ch=String.fromCharCode('a'.charCodeAt()+i);
        map.set(ch, i+1);
    }
    
    for(let i=0; i<chars.length; i++){
        map.set(chars[i], vals[i]);
    }
    
    let ans=0;
    const n=s.length;
    let pre=0;
    for(let i=0; i<n; i++){
        let cur=map.get(s[i]);
        if(pre>=0) cur+=pre;
        ans=Math.max(ans, cur);
        pre=cur;
    }
    return ans;
};