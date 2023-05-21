const HIGH_BIT = 14;
var countPairs = function(nums, low, high) {
    return f(nums, high) - f(nums, low - 1);
};

const f = (nums, x) => {
    root = new Trie();
    let res = 0;

    const add = (num) => {
        let cur = root;
        for (let k = HIGH_BIT; k >= 0; k--) {
            let bit = (num >> k) & 1;
            if (!cur.son[bit]) {
                cur.son[bit] = new Trie();
            }
            cur = cur.son[bit];
            cur.sum++;
        }
    }

    const get = (num, x) => {
        let cur = root;
        let sum = 0;
        for (let k = HIGH_BIT; k >= 0; k--) {
            let r = (num >> k) & 1;
            if (((x >> k) & 1) !== 0) {
                if (cur.son[r]) {
                    sum += cur.son[r].sum;
                }
                if (!cur.son[r ^ 1]) {
                    return sum;
                }
                cur = cur.son[r ^ 1];
            } else {
                if (!cur.son[r]) {
                    return sum;
                }
                cur = cur.son[r];
            }
        }
        sum += cur.sum;
        return sum;
    }

    for (let i = 1; i < nums.length; i++) {
        add(nums[i - 1]);
        res += get(nums[i], x);
    }
    return res;
}

class Trie {
    // son[0] 表示左子树，son[1] 表示右子树
    constructor() {
        this.son = new Array(2).fill(0);
        this.sum = 0;
    }
}