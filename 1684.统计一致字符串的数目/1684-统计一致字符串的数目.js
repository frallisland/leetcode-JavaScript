/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let set=new Set(allowed), cnt=0;
    for(let s of words){
        let flag=true;
        for(let ch of s){
            if(!set.has(ch)){
                flag=false;
                break;
            }
        }
        if(flag) cnt++;
    }
    return cnt;
};