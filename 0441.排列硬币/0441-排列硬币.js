/**
 * @param {number} n
 * @return {number}
 */
// ��һ�����ڵ���n������
function lowerBound(tar) {
  // arr ������ظ�
  let l = 1,
    r = tar+1,
    ans = tar;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    let tot=Math.floor((m+1)*m/2);

    if (tot > tar) {
      r = m - 1;
      ans = m;
    } else {
      l = m + 1;
    }
  }
  return ans;
}

var arrangeCoins = function(n) {
    return lowerBound(n)-1;
};