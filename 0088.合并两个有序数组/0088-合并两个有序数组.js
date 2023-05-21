/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i=m+n-1;
    m--, n--;
    while(m>=0 && n>=0){
        let a=nums1[m], b=nums2[n];
        if(a>b){
            nums1[i]=a;
            i--, m--;
        }else{
            nums1[i]=b;
            i--, n--;
        }
    }

    while(m>=0){
        nums1[i]=nums1[m];
        i--, m--;
    }
    while(n>=0){
        nums1[i]=nums2[n];
        i--, n--;
    }
};