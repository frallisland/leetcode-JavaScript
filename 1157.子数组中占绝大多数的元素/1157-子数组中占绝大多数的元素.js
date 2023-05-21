const K = 20;
var MajorityChecker = function(arr) {
    this.arr = arr;
    this.loc = new Map();
    for (let i = 0; i < arr.length; ++i) {
        if (!this.loc.has(arr[i])) {
            this.loc.set(arr[i], []);
        }
        this.loc.get(arr[i]).push(i);
    }
};

MajorityChecker.prototype.query = function(left, right, threshold) {
    const length = right - left + 1;
    for (let i = 0; i < K; ++i) {
        const x = this.arr[left + Math.floor(Math.random() * length)];
        const pos = this.loc.get(x);
        const occ = searchEnd(pos, right) - searchStart(pos, left);
        if (occ >= threshold) {
            return x;
        } else if (occ * 2 >= length) {
            return -1;
        }
    }

    return -1;
};

const searchStart = (pos, target) => {
    let low = 0, high = pos.length;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        if (pos[mid] >= target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

const searchEnd = (pos, target) => {
    let low = 0, high = pos.length;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        if (pos[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}
