/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let init_='';
    for(let ch of s){
        init_+=(ch.charCodeAt()-'a'.charCodeAt()+1);
    }

    for(let i=0; i<k; i++){
        let acc=0;
        for(let ch of init_){
            let idx=ch.charCodeAt()-'0'.charCodeAt();
            acc+=idx;
        }
        init_=acc.toString();
    }
    return parseInt(init_);
};