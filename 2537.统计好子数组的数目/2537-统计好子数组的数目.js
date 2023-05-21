/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    const n=nums.length;
    let cnt=new Map(), pairs=0, ans=0;
    for(let l=0, r=0; r<n; r++){
        pairs+=(cnt.get(nums[r])||0);
        cnt.set(nums[r], (cnt.get(nums[r])||0)+1);

        while(pairs-(cnt.get(nums[l])-1)>=k){
            cnt.set(nums[l], cnt.get(nums[l])-1);
            pairs-=cnt.get(nums[l]);
            l++;
        }
        if(pairs>=k){
            ans+=l+1;
        }
    }
    return ans;
};