/**
 * @param {number[]} nums
 * @return {number}
 */
var minImpossibleOR = function(nums) {
    const n=nums.length;
    
    nums.sort((a, b)=>a-b);
    
    function is_bin(num){
        let cnt=0;
        while(num){
            if(num&1) cnt++;
            num>>=1;
        }
        return cnt===1||cnt===0;
    }
    
    if(nums[0]!==1) return 1;
    let ans=1;
    for(let num of nums){
        if(is_bin(num)) ans|=num;
        
        if(num>ans){
            return ans+1;
        }
    }
    return ans+1;
};