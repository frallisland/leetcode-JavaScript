/**
 * @param {number[]} nums
 * @return {number[]}
 */
function quickSort(nums, l, r) {
  if (l >= r) return;
  let p = nums[Math.floor((l + r) / 2)],
    i = l,
    j = r;
  while (1) {
    while (nums[i] < p) i++;
    while (nums[j] > p) j--;
    if (i >= j) break;

    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++, j--;
  }
  quickSort(nums, l, j);
  quickSort(nums, j + 1, r);
}


var sortArray = function(nums) {
    quickSort(nums, 0, nums.length-1)
    return nums;
};