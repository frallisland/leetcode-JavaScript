/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
    const n=nums.length;
    nums.sort((a, b)=>a-b);
    
    if(nums[0]===nums[n-1]) return 0;
    
    let min=1000000010, max=0;
    let ans=nums[n-1]-nums[0];
    
    for(let i=0; i<n-1; i++){
        min=Math.min(nums[i+1]-nums[i], min);
    }
    ans+=min;
    
    
    ans=Math.min(ans, Math.min(nums[n-1]-nums[1], nums[n-2]-nums[0]));
    
    let t1=nums[n-1]-nums[2];
    let t2=nums[n-3]-nums[0];
    let t3=nums[n-2]-nums[1];
    
    return Math.min(ans, t1, t2, t3);
};