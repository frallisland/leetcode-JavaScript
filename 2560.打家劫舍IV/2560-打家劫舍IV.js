/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {
    let l=0, r=1000000000;
    
    while(l<r){
        let m=Math.floor((l+r)/2);
        let i=0, j=0, cnt=0;
        for(let i=0; i<nums.length; i++){
            if(nums[i]<=m) j++;
            else{
                cnt+=Math.floor((j+1)/2);
                j=0;
            }
        }
        cnt+=Math.floor((j+1)/2);
        if(cnt>=k) r=m;
        else l=m+1;
    }
    return r;
};