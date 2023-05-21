/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let map=new Map(), n=nums.length, _sum=0;
    let ans=0;
    let l=0, r=0;
    for(; r<k; r++){
        _sum+=nums[r];
        map.set(nums[r], (map.get(nums[r])||0)+1);
    }
    if(map.size===k) ans=_sum;
    
    for(; r<n; r++){
        _sum+=(nums[r]-nums[l]);
        // update
        let preCnt=map.get(nums[l]);
        if(preCnt===1){
            map.delete(nums[l]);
        }else{
            map.set(nums[l], preCnt-1);
        }
        l++;
        
        map.set(nums[r], (map.get(nums[r])||0)+1);
        if(map.size===k){
            ans=Math.max(ans, _sum);
        }
    }
    return ans;
};