/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCost = function(nums, k) {
    const n=nums.length;
    let f=new Array(n+1).fill(0);
    
    for(let i=0; i<n; i++){
        let mn=Infinity;
        let cnt=new Array(n).fill(0), cost=0;
        for(let j=i; j>=0; j--){
            let x=nums[j];
            cnt[x]++;
            if(cnt[x]===2){
                cost+=2;
            }else if(cnt[x]>2){
                cost++;
            }
            
            mn=Math.min(mn, f[j]+cost);
        }
        f[i+1]=k+mn;
    }
    return f[n];
};