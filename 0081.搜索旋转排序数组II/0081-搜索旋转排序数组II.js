/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    const n=nums.length;
    if(n===0) return false;
    if(n===1) return nums[0]===target;

    let l=0, r=n-1;
    while(l<=r){
        let m=((l+r)>>1);
        if(nums[m]===target) return true;
        if(nums[l]===nums[m] && nums[r]===nums[m]){
            ++l;
            --r;
        }else if(nums[l]<=nums[m]){
            if(nums[l]<=target && target<nums[m]){
                r=m-1;
            }else{
                l=m+1;
            }
        }else{
            if(nums[m]<target && target<=nums[n-1]){
                l=m+1;
            }else{
                r=m-1;
            }
        }
    }
    return false;
};