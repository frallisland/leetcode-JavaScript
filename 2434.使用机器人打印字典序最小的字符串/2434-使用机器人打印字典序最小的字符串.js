/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
    let ans='';
    let stk=[];
    let min=0;

    let cnt=new Array(26).fill(0);
    const n=s.length;
    for(let i=0; i<n; i++){
        let idx=s[i].charCodeAt()-'a'.charCodeAt();
        cnt[idx]++;
    }
    for(let i=0; i<n; i++){
        let idx=s[i].charCodeAt()-'a'.charCodeAt();
        cnt[idx]--;
        while(min<25 && cnt[min]===0) min++;
        
        stk.push(s[i]);
        while(stk.length && (stk[stk.length-1].charCodeAt()-'a'.charCodeAt())<=min){
            ans+=stk.pop();
        }
    }
    return ans;
};