/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minimumScore = function(s, t) {
    const n=s.length, m=t.length;

    let suf=new Array(n+1).fill(m);

    for(let i=n-1, j=m-1; i>=0; i--){
        if(j>=0 && s[i]===t[j]){
            j--;
        }
        suf[i]=j+1;
    }

    let ans=suf[0];
    for(let i=0, j=0; i<n; i++){
        if(s[i]===t[j]){
            j++;
            if(suf[i+1]>=j) ans=Math.min(ans, suf[i+1]-j);
        }
        if(j===m) break;
    }
    return ans;
};