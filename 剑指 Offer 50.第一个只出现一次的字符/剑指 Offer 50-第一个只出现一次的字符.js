/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let cnt=new Array(26).fill(0);
    for(let ch of s){
        let index=ch.charCodeAt()-'a'.charCodeAt();
        cnt[index]++;
    }
    for(let ch of s){
        let index=ch.charCodeAt()-'a'.charCodeAt();
        if(cnt[index]===1){
            return ch;
        }
    }
    return ' ';
}; 