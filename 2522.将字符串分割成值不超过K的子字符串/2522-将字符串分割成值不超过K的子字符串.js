/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function(s, k) {
    const n=s.length;
    let ans=0;
    let l=0, r=0;
    for(; r<n; r++){
        let tt=s.substring(l, r+1);
        if(parseInt(tt)>k){
           if(l===r){
               return -1;
           }else{
               ans++;
               l=r;
               if(parseInt(s[l])>k) return -1;
           }
        }
    }
    return ans+1;
};