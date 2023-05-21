/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const n=nums.length;
    for(let i=0; i<n; i++){
        if(nums[i]===i) continue;

        while(nums[i]!==i){
            if(nums[i]===nums[nums[i]]){
                return nums[i];
            }else{
                let temp=nums[nums[i]];
                nums[nums[i]]=nums[i];
                nums[i]=temp;
                // [nums[i], nums[nums[i]]]=[nums[nums[i]], nums[i]];
            }
            // console.log(nums);
        }
        
    }
    return -1;
};