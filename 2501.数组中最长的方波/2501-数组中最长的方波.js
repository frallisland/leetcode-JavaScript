/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    const n=nums.length;
    let mp=new Map();

    nums.sort((a, b)=>a-b);
    
    let ans=0;
    for(let i=0; i<n; i++){
        let sq=Math.floor(Math.sqrt(nums[i]));
        if(sq*sq===nums[i] && mp.has(sq)){
            mp.set(nums[i], mp.get(sq)+1);
        }else{
            mp.set(nums[i], 1);
        }
        ans=Math.max(ans, mp.get(nums[i]));
    }

    return ans>1?ans:-1;
};