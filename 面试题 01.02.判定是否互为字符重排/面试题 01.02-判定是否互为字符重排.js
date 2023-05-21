/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    if(s1.length!==s2.length) return false
    let mp=new Map()
    for(let i=0; i<s1.length; i++){
        let cnt=mp.get(s1[i])||0
        mp.set(s1[i], cnt+1)
    }

    for(let i=0; i<s2.length; i++){
        let cnt=mp.get(s2[i])||0
        if(cnt===0) return false
        mp.set(s2[i], cnt-1)
    }
    return true
};