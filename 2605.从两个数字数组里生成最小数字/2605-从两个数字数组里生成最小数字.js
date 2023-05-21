/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    nums1.sort((a, b)=>a-b);
    nums2.sort((a, b)=>a-b);
    
    let set=new Set(nums1);
    for(let num of nums2){
        if(set.has(num)){
            return num;
        }
    }
    
    let num1=nums1[0]*10+nums2[0];
    let num2=nums2[0]*10+nums1[0];
    return num1<num2?num1:num2;
};