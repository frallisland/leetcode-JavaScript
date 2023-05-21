/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function quickSort(arr, l, r){
    if(l>=r) return;
    let p=arr[l], i=l, j=r;
    while(true){
        while(arr[i]<p) i++;
        while(arr[j]>p) j--;
        if(i>=j) break;
        [arr[i], arr[j]]=[arr[j], arr[i]];
        i++, j--;
    }
    quickSort(arr, l, j);
    quickSort(arr, j+1, r);
}
var sortColors = function(nums) {
    quickSort(nums, 0, nums.length-1);
};