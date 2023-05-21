/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    const n=nums.length, MOD=1000000007;
    let map=new Map(), ans=0;
    
    function rev(num){
        let ans=0;
        while(num){
            ans=ans*10+(num%10);
            num=Math.floor(num/10);
        }
        return ans;
    }
    
    for(let i=0; i<n; i++){
        let d=nums[i]-rev(nums[i]);
        ans=(ans+(map.get(d)||0))%MOD;
        map.set(d, (map.get(d)||0)+1);
    }
    return ans;
};