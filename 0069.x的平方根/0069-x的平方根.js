/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let ans=0;
    let l=1, r=x;
    while(l<=r){
        let m=Math.floor((l+r)/2);
        if(m*m<=x){
            ans=m;
            l=m+1;
        }else{
            r=m-1;
        }
    }
    return ans;
};