/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let ans=0;
    let l=1, r=_.max(nums);
    while(l<=r){
        let mid=Math.floor((l+r)/2);
        let cnt=0;
        for(let num of nums){
            cnt+=Math.ceil(num/mid);
        }
        if(cnt>threshold){
            l=mid+1;
        }else{
            ans=mid;
            r=mid-1;
        }
    }
    return ans;
};