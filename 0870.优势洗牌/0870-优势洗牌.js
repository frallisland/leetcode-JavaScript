/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    const n=nums1.length;
    let ans=new Array(n).fill(0);
    nums1.sort((a, b)=>a-b);
    let ids=new Array(n).fill(0);
    ids=ids.map((v, i)=>i);
    ids.sort((a, b)=>{
        return nums2[a]-nums2[b];
    })
    for(let l=0, r=n-1, i=0; i<n; i++){
        if(nums1[i]>nums2[ids[l]]){
            ans[ids[l]]=nums1[i];
            l++;
        }else{
            ans[ids[r]]=nums1[i];
            r--;
        }
    }
    return ans;
};