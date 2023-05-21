/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let mp=new Map();
    let ans=-1;
    for(let i=0; i<s.length; i++){
        if(mp.has(s[i])){
            ans=Math.max(ans, i-mp.get(s[i])-1);
        }else{
            mp.set(s[i], i);
        }
    }
    return ans;
};