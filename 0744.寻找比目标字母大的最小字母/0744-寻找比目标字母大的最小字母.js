/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 function upperBound(arr, tar) {
  // arr ÓĞĞò¿ÉÖØ¸´
  let l = 0,
    r = arr.length - 1;
  if (arr[r].charCodeAt() <= tar.charCodeAt()) return 0;

  while (l < r) {
    let m = l + ((r - l) >> 1);
    if (arr[m].charCodeAt() <= tar.charCodeAt()) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
}
var nextGreatestLetter = function(letters, target) {
    return letters[upperBound(letters, target)];
};