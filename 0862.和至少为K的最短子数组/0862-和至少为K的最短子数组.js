/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const n=nums.length;
    let pre_sum=new Array(n+1).fill(0);
    for(let i=1; i<n+1; i++) pre_sum[i]=pre_sum[i-1]+nums[i-1];

    let dq=[], ans=Infinity;
    for(let i=0; i<n+1; i++){
        while(dq.length && pre_sum[i]-pre_sum[dq[0]]>=k){
            ans=Math.min(ans, i-dq.shift());
        }
        while(dq.length && pre_sum[dq[dq.length-1]]>=pre_sum[i]){
            dq.pop();
        }
        dq.push(i);
    }
    return ans===Infinity?-1:ans;
};