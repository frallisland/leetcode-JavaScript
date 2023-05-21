/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    const n=nums.length;
    let j=0;
    for(let i=0; i<n-1; i++){
        if(nums[i]===nums[i+1]){
            nums[i]*=2;
            nums[i+1]=0;
        }
        if(nums[i]){
            nums[j]=nums[i];
            j++;    
        }
    }
    if(nums[n-1]) nums[j]=nums[n-1], j++;
    for(; j<n; j++) nums[j]=0;
    return nums;
};