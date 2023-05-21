/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let cnts=new Array(26).fill(0);
    for(let ch of magazine){
        let idx=ch.charCodeAt()-'a'.charCodeAt();
        cnts[idx]++;
    }
    for(let ch of ransomNote){
        let idx=ch.charCodeAt()-'a'.charCodeAt();
        if(!cnts[idx]) return false;
        cnts[idx]--;
    }
    return true;
};