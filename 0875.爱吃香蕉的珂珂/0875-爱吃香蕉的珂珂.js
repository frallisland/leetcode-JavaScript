/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let ans=0;
    let l=1, r=_.max(piles);
    function check(speed){
        let ans=0;
        for(let p of piles){
            ans+=Math.ceil(p/speed);
        }
        return ans<=h;
    }
    while(l<=r){
        let m=Math.floor((l+r)/2);
        if(check(m)){
            ans=m;
            r=m-1;
        }else{
            l=m+1;
        }
    }
    return ans;
};