/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    let map=new Map();
    const n=s.length;
    for(let i=0; i<n; i++){
        if(!map.has(s[i])){
            map.set(s[i], i);
        }else{
            let idx=s[i].charCodeAt()-'a'.charCodeAt();
            if(i-map.get(s[i])-1!==distance[idx]) return false;
        }
    }
    return true;
};