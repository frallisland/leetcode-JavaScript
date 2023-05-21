/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function(nums, k, x) {
    const n=nums.length;
    
    let cnts=new Array(51).fill(0)
    for(let i=0; i<k; i++){
        let x=Math.min(nums[i], 0)
        cnts[x+50]++
    }
    
    function find(x){
        let _sum=0;
        for(let i=0; i<cnts.length; i++){
            _sum+=cnts[i]
            if(_sum>=x) return i-50
        }
        return -51
    }
    
    let ans=[find(x)];
    for(let i=k; i<n; i++){
        let prev=Math.min(nums[i-k], 0)+50
        let curr=Math.min(nums[i], 0)+50
        
        cnts[prev]--
        cnts[curr]++
        ans.push(find(x));

    }
    return ans;
};