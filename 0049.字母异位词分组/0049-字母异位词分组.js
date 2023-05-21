/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map=new Map();
    for(let word of strs){
        let tt=word.split('').sort((a, b)=>a.charCodeAt()-b.charCodeAt()).join('');
        let vals=map.get(tt)||[];
        vals.push(word);
        map.set(tt, vals);
    }
    let ans=[];
    for(let [_, v] of map){
        ans.push(v);
    }
    return ans;
};