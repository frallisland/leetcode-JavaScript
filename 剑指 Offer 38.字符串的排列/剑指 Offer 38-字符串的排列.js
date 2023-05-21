/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const l1=s1.length, l2=s2.length;
    let cnt=new Array(26).fill(0);
    
    for(let ch of s1){
        let idx=ch.charCodeAt()-'a'.charCodeAt();
        cnt[idx]++;
    }

    for(let l=0, r=0; r<l2; r++){
        let idx=s2[r].charCodeAt()-'a'.charCodeAt();
        cnt[idx]--;
        while(l<=r && cnt[idx]<0){
            let tidx=s2[l].charCodeAt()-'a'.charCodeAt();
            cnt[tidx]++;
            l++;
        }
        // console.log(l, r);
        if(r-l+1===l1) return true;
    }
    return false;
};