/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    let ans=0;
    nums.sort((a, b)=>a-b);
    const n=nums.length;
    
    function upperBound(arr, tar, l, r) {
      // arr 有序可重复
      let ans = arr.length;

      while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (arr[m] > tar) {
          r = m - 1;
          ans = m;
        } else {
          l = m + 1;
        }
      }
      return ans;
    }
    
    function lowerBound(arr, tar, l, r) {
        if(arr[r]<tar) return arr.length;
        
    // arr 有序可重复
      let ans = arr.length;

      while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (arr[m] >= tar) {
          r = m - 1;
          ans = m;
        } else {
          l = m + 1;
        }
      }
      return ans;
    }
    
    for(let i=0; i<n-1; i++){
        if(2*nums[i]>upper) break;
        let li=lowerBound(nums, lower-nums[i], i+1, n-1);
        let ri=upperBound(nums, upper-nums[i], i+1, n-1);
        ans+=ri-li;
    }
    return ans;
};