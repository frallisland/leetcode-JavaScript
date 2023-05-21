var nextLargerNodes = function(head) {
    const ans = [];
    const stack = [];

    let cur = head;
    let idx = -1;
    while (cur) {
        ++idx;
        ans.push(0);
        while (stack.length && stack[stack.length - 1][0] < cur.val) {
            ans[stack.pop()[1]] = cur.val;
        }
        stack.push([cur.val, idx]);
        cur = cur.next;
    }

    const size = ans.length;
    const arr = new Array(size);
    for (let i = 0; i < size; ++i) {
        arr[i] = ans[i];
    }
    return arr;
};