/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function(word1, word2) {
    let cnt1=new Array(26).fill(0), cnt2=new Array(26).fill(0);
    for(let ch of word1){
        let idx=ch.charCodeAt()-'a'.charCodeAt();
        cnt1[idx]++;
    }
    for(let ch of word2){
        let idx=ch.charCodeAt()-'a'.charCodeAt();
        cnt2[idx]++;
    }
    
    let tot1=0, tot2=0;
    for(let i=0; i<26; i++){
        if(cnt1[i]) tot1++;
        if(cnt2[i]) tot2++;
    }

    for(let i=0; i<26; i++){
        if(!cnt1[i]) continue;
        for(let j=0; j<26; j++){
            if(!cnt2[j]) continue;
            if(i===j){
                if(tot1===tot2){
                    return true;
                }
            }else{
                let t1=tot1+(cnt1[i]===1?-1:0)+(cnt1[j]===0?1:0);
                let t2=tot2+(cnt2[j]===1?-1:0)+(cnt2[i]===0?1:0);
                if(t1===t2) return true;
            }
        }
    }
    return false;
};