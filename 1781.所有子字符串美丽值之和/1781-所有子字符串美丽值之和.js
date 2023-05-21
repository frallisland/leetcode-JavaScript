/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    const n=s.length;
    let ans=0;

    for(let l=0; l<n; l++){
        let tt=new Array(26).fill(0);
        let tmx=0;
        for(let r=l; r<n; r++){
            let idx=s[r].charCodeAt()-'a'.charCodeAt();
            tt[idx]++;
            tmx=Math.max(tmx, tt[idx]);

            let tmn=510;
            for(let t of tt){
                if(t){
                    tmn=Math.min(tmn, t);
                }
            }

            if(tmx-tmn) ans+=tmx-tmn;
        }
    }
    return ans;
};