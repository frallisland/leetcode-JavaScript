/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 function lowerBound(arr, tar) {
  // arr ÓĞĞò¿ÉÖØ¸´
  let l = 0,
    r = arr.length - 1,
    ans = -1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] >= tar) {
      l = m + 1;
      ans = m;
    } else {
      r = m - 1;
    }
  }
  return ans;
}
var maxDistance = function(nums1, nums2) {
    let ans=0;
    for(let i=0; i<nums1.length; i++){
        let idx=lowerBound(nums2, nums1[i]);
        if(idx<i) continue;
        ans=Math.max(ans, idx-i);
    }
    return ans;
};