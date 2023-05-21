/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    const n=nums.length;
    const m=queries.length;
    let ans=new Array(m);
    let preSum=new Array(n);
    nums.sort((a,b)=>a-b);
    
    preSum[0]=nums[0];
    for(let i=1; i<n; i++){
        preSum[i]=preSum[i-1]+nums[i];
    }
    
    // 二分找最小值
    // 直接暴力
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(j===n-1 && preSum[j]<=queries[i]){
                ans[i]=n;
                break;
            }
            
            if(preSum[j]>queries[i]){
                ans[i]=j;
                break;
            }
        }
    }
    return ans;
};