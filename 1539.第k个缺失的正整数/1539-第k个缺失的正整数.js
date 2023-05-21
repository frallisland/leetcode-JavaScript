/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= k) {
            k++
        }
    }

    return k
};