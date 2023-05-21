/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let set=new Set();
    for(let ch of s){
        if(set.has(ch)) return ch;
        set.add(ch);
    }
    return "";
};