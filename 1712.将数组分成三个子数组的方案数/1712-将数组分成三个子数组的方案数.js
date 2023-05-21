/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function(nums) {
    const MOD=1000000007, n=nums.length;
    if(n<3) return 0;

    for(let i=1; i<nums.length; i++){
        nums[i]+=nums[i-1];
    }

    let ans=0;
    for(let i=0; i<n-2; i++){
        let l=i+1, r=n-2;
        
        // r 右边的是不符合条件的
        while(l<r){
            let mid=Math.floor((l+r+1)/2);
            if(nums[mid]-nums[i]<=nums[n-1]-nums[mid]){
                l=mid;
            }else{
                r=mid-1;
            }
        }
        if(nums[r]-nums[i]<nums[i] || nums[r]-nums[i]>nums[n-1]-nums[r]) continue;

        let l1=i+1, r1=r;
        while(l1<r1){
            let mid=Math.floor((l1+r1)/2);
            if(nums[mid]-nums[i]<nums[i]){
                l1=mid+1;
            }else{
                r1=mid;
            }
        }
        ans=(ans+(r-l1+1))%MOD;
    }
    return ans;
};