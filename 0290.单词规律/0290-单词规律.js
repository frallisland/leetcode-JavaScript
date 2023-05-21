/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let ss=s.split(' ');
    if(ss.length!==pattern.length) return false;
    let map1=new Map(), map2=new Map();
    for(let i=0; i<pattern.length; i++){
        if((map1.has(pattern[i]) && map1.get(pattern[i])!==ss[i]) || (map2.has(ss[i]) && map2.get(ss[i])!==pattern[i])){
            return false;
        }else{
            map1.set(pattern[i], ss[i]);
            map2.set(ss[i], pattern[i]);
        }
    }
    return true;
};