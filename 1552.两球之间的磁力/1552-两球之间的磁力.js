/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a, b)=>a-b);
    let l=1, r=position[position.length-1];
    let ans=0;
    function check(position, mid, m){
        let preI=0, cnt=1;
        for(let i=1; i<position.length; i++){
            if(position[i]-position[preI]>=mid){
                preI=i;
                cnt++;
            }
            if(cnt>=m) return true;
        }
        return cnt>=m;
    }
    while(l<=r){
        let mid=Math.floor((l+r)/2);
        if(check(position, mid, m)){
            ans=mid;
            l=mid+1;
        }else{
            r=mid-1;
        }
    }
    return ans;
};