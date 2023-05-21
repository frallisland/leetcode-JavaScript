/**
 * @param {number[][]} grid
 * @return {number}
 */
function upperBound(arr, tar) {
  // arr ”––Úø…÷ÿ∏¥
  let l = 0,
    r = arr.length - 1,
    ans = -1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] >= tar) {
      l = m + 1;
      ans = m;
    } else {
      r = r - 1;
    }
  }
  return ans;
}

var countNegatives = function(grid) {
    const n=grid[0].length;
    let ans=0;
    for(let p of grid){
        console.log(upperBound(p, 0));
        ans+=(n-upperBound(p, 0)-1);
    }
    return ans;
};