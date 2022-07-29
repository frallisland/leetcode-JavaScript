/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n=nums.length;
    let vis=new Array(n).fill(false);
    let nxt=nums[0], idx=0;
    while(idx<n && idx<=nxt){
        if(nxt<nums[idx]+idx){
            nxt=nums[idx]+idx;
        }
        vis[idx]=true;
        idx++;
    }
    return vis[n-1];
};