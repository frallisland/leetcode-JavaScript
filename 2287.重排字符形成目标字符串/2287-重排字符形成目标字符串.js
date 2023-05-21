/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    let cnt1=new Map(), cnt2=new Map();
    for(let ch of target){
        cnt2.set(ch, (cnt2.get(ch)||0)+1);
    }

    for(let ch of s){
        if(cnt2.has(ch)) cnt1.set(ch, (cnt1.get(ch)||0)+1);
    }

    let ans=Infinity;
    for(let [k,  v] of cnt2){
        if(!cnt1.has(k)) return 0;
        ans=Math.min(ans, Math.floor(cnt1.get(k)/v));
    }
    return ans;
};