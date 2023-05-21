/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 function lowerBound(arr, tar){
    // arr ÓĞĞò¿ÉÖØ¸´
    let l=0, r=arr.length-1;
    if(arr[r]<tar) return r+1;

    while(l<r){
        let m=l+((r-l)>>1);
        if(arr[m]<tar){
            l=m+1;
        }else{
            r=m;
        }
    }
    return l;
}
var search = function(nums, target) {
    let left=lowerBound(nums, target), right=lowerBound(nums, target+1);
    return right-left;
};