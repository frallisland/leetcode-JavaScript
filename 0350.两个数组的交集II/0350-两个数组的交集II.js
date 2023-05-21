/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let cnt=new Map();
    for(let num of nums1){
        cnt.set(num, (cnt.get(num)||0)+1);
    }

    let ans=[];
    for(let num of nums2){
        if(cnt.get(num)>=1){
            ans.push(num);
            cnt.set(num, cnt.get(num)-1);
        }
    }
    return ans;
};