/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let set=new Set();
    let ans=[];
    for(let ch of s){
        if(ch.charCodeAt()>='a'.charCodeAt() && ch.charCodeAt()<='z'.charCodeAt()){
            let up=ch.charCodeAt()-'a'.charCodeAt()+'A'.charCodeAt();
            let tch=String.fromCharCode(up);
            if(set.has(tch)) ans.push(tch);
        }else{
            let low=ch.charCodeAt()-'A'.charCodeAt()+'a'.charCodeAt();
            let tch=String.fromCharCode(low);
            if(set.has(tch)) ans.push(ch);
        }
        
        set.add(ch);
    }
    ans.sort((a, b)=>b.charCodeAt()-a.charCodeAt());
    return ans[0]||'';
};