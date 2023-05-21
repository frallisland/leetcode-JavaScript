/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
function upperBound(arr, tar) {
  // arr ÓĞĞò¿ÉÖØ¸´
  let l = 0,
    r = arr.length - 1,
    ans = -1;

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

var chalkReplacer = function(chalk, k) {
    const n=chalk.length;
    for(let i=1; i<n; i++){
        chalk[i]+=chalk[i-1];
    }
    k%=chalk[n-1];
    return upperBound(chalk, k);
};