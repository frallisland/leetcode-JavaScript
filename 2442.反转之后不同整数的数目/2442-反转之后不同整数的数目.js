/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    function reverse(num){
        let ans=0, cnt=1;
        while(num){
            let res=num%10;
            ans*=10;
            ans+=res;
            num=Math.floor(num/10);
        }
        return ans;
    }
    
    const n=nums.length;
    for(let i=0; i<n; i++){
        let tmp=reverse(nums[i]);
        nums.push(tmp);
    }
    console.log(nums);
    let st=new Set(nums);
    return Array.from(st).length;
};