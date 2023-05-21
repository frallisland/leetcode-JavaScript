/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let l=0, r=nums.length-1;
    let idxs=new Array(nums.length).fill(0).map((v, i)=>i);
    idxs.sort((a, b)=>nums[a]-nums[b]);

    while(l<r){
        let t=nums[idxs[l]]+nums[idxs[r]];
        if(t===target) return [idxs[l], idxs[r]];
        else if(t<target) l++;
        else r--;
    }
    return [-1, -1];
};