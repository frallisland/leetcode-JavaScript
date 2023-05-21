/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function(s, p, removable) {
    const n=s.length;
    let l=0, r=removable.length;
    let ans=-1;

    function check(t){
        let set=new Set(removable.slice(0, t));
        
        for(let i=0, j=0; i<s.length; i++){
            if(set.has(i)) continue;
            if(s[i]===p[j]) j++;
            if(j===p.length) return true;
        }
        return false;
    }

    while(l<=r){
        let mid=Math.floor((l+r)/2);
        // console.log(mid, l, r);
        if(check(mid)){
            ans=mid;
            l=mid+1;
        }else{
            r=mid-1;
        }
    }

    return ans;
};