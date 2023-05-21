/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let cnts=new Array(26).fill(0);
    for(let ch of s){
        let idx=ch.charCodeAt()-'a'.charCodeAt();
        cnts[idx]++;
    }
    for(let ch of t){
        let idx=ch.charCodeAt()-'a'.charCodeAt();
        if(!cnts[idx]) return false;
        cnts[idx]--;
    }
    return _.sum(cnts)===0;
};