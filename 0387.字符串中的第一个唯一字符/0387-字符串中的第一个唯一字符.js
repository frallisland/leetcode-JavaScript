/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let cnts=new Array(26).fill(0);
    for(let ch of s){
        let idx=ch.charCodeAt()-'a'.charCodeAt();
        cnts[idx]++;
    }
    for(let i=0; i<s.length; i++){
        let idx=s[i].charCodeAt()-'a'.charCodeAt();
        if(cnts[idx]===1) return i;
    }
    return -1;
};