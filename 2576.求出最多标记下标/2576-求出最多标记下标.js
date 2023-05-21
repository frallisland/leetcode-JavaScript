/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function(nums) {
    const n=nums.length;
    nums.sort((a, b)=>a-b);
    
    let ans=0;
    let i=Math.floor((n-1)/2), j=n-1;
    
    while(i>=0 && j>Math.floor((n-1)/2)){
        while(i>=0 && nums[i]*2>nums[j]) i--;
        
        if(i>=0 && j>Math.floor((n-1)/2)){
            i--;
            j--;
            ans+=2;
        }
    }
    return ans;
};