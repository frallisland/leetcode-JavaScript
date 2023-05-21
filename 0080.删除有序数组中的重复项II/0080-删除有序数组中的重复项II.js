/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n=nums.length;
    if(n<=2) return n;

    let [slow, fast]=[2, 2];
    while(fast<n){
        if(nums[slow-2]!=nums[fast]){
            nums[slow]=nums[fast];
            slow++;
        }
        ++fast;
    }
    return slow;
};