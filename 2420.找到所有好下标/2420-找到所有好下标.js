/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var goodIndices = function(nums, k) {
    const n=nums.length;
    let before=new Array(n).fill(0)
    let after=new Array(n).fill(0)

    for(let i=1; i<n; i++){
        if(nums[i]<=nums[i-1]){
            before[i]=before[i-1]+1
        }else{
            before[i]=0
        }
    }

    for(let i=n-2; i>=0; i--){
        if(nums[i]<=nums[i+1]){
            after[i]=after[i+1]+1
        }else{
            after[i]=0
        }
    }
    let ans=[]
    for(let i=k; i<n-k; i++){
        if(before[i-1]>=k-1 && after[i+1]>=k-1){
            ans.push(i)
        }
    }
    return ans
};