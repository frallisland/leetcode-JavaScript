/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function upperBound(arr, tar) {
  // arr 有序可重复
  let l = 0,
    r = arr.length - 1,
    ans = arr.length;

  while (l <= r) {
    let m = Math.floor((l+r)/2);
    if (arr[m] > tar) {
      r = m - 1;
      ans = m;
    } else {
      l = m + 1;
    }
  }
  return ans;
}

function lowerBound(arr, tar) {
  // arr 有序可重复
  let l = 0,
    r = arr.length - 1,
    ans = arr.length;

  while (l <= r) {
    let m = Math.floor((l+r)/2);
    if (arr[m] >= tar) {
      r = m - 1;
      ans = m;
    } else {
      l = m + 1;
    }
  }
  return ans;
}

var searchRange = function(nums, target) {
    let start=lowerBound(nums, target), end=upperBound(nums, target)-1;
    if(end<nums.length && nums[end]===target){
        return [start, end];
    }
    return [-1, -1];
    
};