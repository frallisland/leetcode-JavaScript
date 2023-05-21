/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let map=new Map();
    for(let i=0; i<26; i++){
        map.set(order[i], i);
    }

    function check(word1, word2){
        const m=word1.length, n=word2.length;
        for(let i=0; i<Math.min(m, n); i++){
            if(word1[i]===word2[i]) continue;
            if(map.get(word1[i])<map.get(word2[i])) return true;
            if(map.get(word1[i])>map.get(word2[i])) return false;
        }
        return m<=n;
    }

    for(let i=0; i<words.length-1; i++){
        if(!check(words[i], words[i+1])){
            return false;
        }
    }
    return true;
};