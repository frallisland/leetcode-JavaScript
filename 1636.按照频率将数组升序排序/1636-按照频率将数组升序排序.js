/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let mp=new Map();
    nums.forEach((v, i)=>{
        let cnt=mp.get(v)||0;
        mp.set(v, cnt+1);
    });
    nums.sort((a,b)=>{
        let cntA=mp.get(a), cntB=mp.get(b);
        return cntA===cntB?b-a:cntA-cntB;
    });
    return nums;
};