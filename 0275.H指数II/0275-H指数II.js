/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(cs) {
    let l=0, r=_.max(cs);
    let ans=Infinity;
    const n=cs.length;

    function check(mid){
        let l=0, r=cs.length-1;
        let idx=cs.length;
        while(l<=r){
            let m=Math.floor((l+r)/2);
            if(cs[m]>=mid){
                idx=m;
                r=m-1;
            }else{
                l=m+1;
            }
        }
        
        return cs.length-idx>=mid;
    }

    while(l<=r){
        let mid=Math.floor((l+r)/2);
        if(check(mid)){
            ans=mid;
            l=mid+1;
        }else{
            r=mid-1;
        }
    }
    return ans;
};