var minOperations = function(boxes) {
    let left = boxes[0].charCodeAt() - '0'.charCodeAt(), right = 0, operations = 0;
    const n = boxes.length;
    for (let i = 1; i < n; i++) {
        if (boxes[i] === '1') {
            right++;
            operations += i;
        }
    }
    const res = new Array(n).fill(0);
    res[0] = operations;
    for (let i = 1; i < n; i++) {
        operations += left - right;
        if (boxes[i] === '1') {
            left++;
            right--;
        }
        res[i] = operations;
    }
    return res;
}