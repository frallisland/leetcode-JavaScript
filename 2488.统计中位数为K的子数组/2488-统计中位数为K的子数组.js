/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const pos=nums.indexOf(k);
    let cnt=new Map();
    cnt.set(0, 1);
    let c=0;
    for(let i=pos+1; i<nums.length; i++){
        if(nums[i]>k) c++;
        else c--;
        cnt.set(c, (cnt.get(c)||0)+1)
    }

    let ans=cnt.get(0)+(cnt.get(1)||0);
    c=0;
    for(let i=pos-1; i>=0; i--){
        if(nums[i]<k) c++;
        else c--;
        let t1=cnt.get(c)||0, t2=cnt.get(c+1)||0;
        ans+=t1+t2;
    }
    return ans;
};