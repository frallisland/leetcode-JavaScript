/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    const n=nums.length;
    const map=new Map();
    for(let num of nums){
        map.set(num, (map.get(num)||0)+1);
    }

    let ans=new Array(n).fill(0);
    let afterSum=map.size;
    let preSet=new Set();
    for(let i=0; i<n; i++){
        let curCnt=map.get(nums[i]);
        preSet.add(nums[i]);
        if(curCnt===1) afterSum--;

        ans[i]=preSet.size-afterSum;
        map.set(nums[i], curCnt-1);
    }
    return ans;
};
