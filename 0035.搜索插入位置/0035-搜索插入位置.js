/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, tar) {
  let l = 0,
    r = nums.length - 1;
  if (nums[r] < tar) return r + 1;

  while (l < r) {
    let m = l + ((r - l) >> 1);
    if (nums[m] < tar) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
};