/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
    const n=s.length;
    let f=new Array(n+1).fill(0);
    for(let i=0; i<2*n-1; i++){
        let l=Math.floor(i/2), r=l+i%2;
        f[l+1]=Math.max(f[l+1], f[l]);
        while(l>=0 && r<n && s[l]===s[r]){
            if(r-l+1>=k){
                f[r+1]=Math.max(f[r+1], f[l]+1);
            }
            l--, r++;
        }
    }
    return f[n];
}
