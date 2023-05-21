/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let res=0;
    const n=s.length;
    let cnt=new Set();
    
    for(let i=0; i<n; i++){
        let idx=s[i].charCodeAt()-'a'.charCodeAt();
        if(cnt.has(idx)){
            res++;
            cnt.clear();
        }
        cnt.add(idx)
    }
    res++;
    return res;
};