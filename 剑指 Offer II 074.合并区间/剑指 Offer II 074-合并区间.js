/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(arr) {
  arr.sort((a, b) => a[0] - b[0]);
  let [st, ed] = [-Infinity, -Infinity];

  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] > ed) {
      if (st !== -Infinity) ans.push([st, ed]);
      [st, ed] = [arr[i][0], arr[i][1]];
    } else {
      ed = Math.max(ed, arr[i][1]);
    }
  }
  if (st !== -Infinity) ans.push([st, ed]);
  return ans;
};