/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    let arr=nums.slice();
    arr.sort((a,b)=>a-b);
    let n=nums.length;
    let x=Math.floor(n/2);
    let mid=n%2?x:x-1;
    for(let i=0, r=n-1; i<n; i++, r--){
        nums[i++]=arr[r-x];
        if(r>mid) nums[i]=arr[r];
    }
};