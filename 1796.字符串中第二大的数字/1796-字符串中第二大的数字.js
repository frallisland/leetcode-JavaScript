/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let a='*', b='*';
    for(let ch of s){
        if(ch.charCodeAt()<48 || ch.charCodeAt()>57) continue;
        if(ch>a){
            b=a;
            a=ch;
        }else if(ch!==a && ch>b){
            b=ch;
        }
    }
    return b==='*'?-1:parseInt(b);
};