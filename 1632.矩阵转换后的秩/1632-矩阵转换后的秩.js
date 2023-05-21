var matrixRankTransform = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const uf = new UnionFind(m, n);
    for (let i = 0; i < m; i++) {
        const num2indexList = new Map();
        for (let j = 0; j < n; j++) {
            const num = matrix[i][j];
            if (!num2indexList.has(num)) {
                num2indexList.set(num, []);
            }
            num2indexList.get(num).push([i, j]);
        }
        for (const indexList of num2indexList.values()) {
            const arr1 = indexList[0];
            const i1 = arr1[0], j1 = arr1[1];
            for (let k = 1; k < indexList.length; k++) {
                const arr2 = indexList[k];
                const i2 = arr2[0], j2 = arr2[1];
                uf.union(i1, j1, i2, j2);
            }
        }
    }
    for (let j = 0; j < n; j++) {
        const num2indexList = new Map();
        for (let i = 0; i < m; i++) {
            const num = matrix[i][j];
            if (!num2indexList.has(num)) {
                num2indexList.set(num, []);    
            }
            
            num2indexList.get(num).push([i, j]);
        }
        for (const indexList of num2indexList.values()) {
            const arr1 = indexList[0];
            const i1 = arr1[0], j1 = arr1[1];
            for (let k = 1; k < indexList.length; k++) {
                const arr2 = indexList[k];
                const i2 = arr2[0], j2 = arr2[1];
                uf.union(i1, j1, i2, j2);
            }
        }
    }

    const degree = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const adj = new Map();
    for (let i = 0; i < m; i++) {
        const num2index = new Map();
        for (let j = 0; j < n; j++) {
            const num = matrix[i][j];
            num2index.set(num, [i, j]);
        }
        const sortedArray = [...num2index.keys()];
        sortedArray.sort((a, b) => a - b);
        for (let k = 1; k < sortedArray.length; k++) {
            const prev = num2index.get(sortedArray[k - 1]);
            const curr = num2index.get(sortedArray[k]);
            const i1 = prev[0], j1 = prev[1], i2 = curr[0], j2 = curr[1];
            const root1 = uf.find(i1, j1);
            const root2 = uf.find(i2, j2);
            const ri1 = root1[0], rj1 = root1[1], ri2 = root2[0], rj2 = root2[1];
            degree[ri2][rj2]++;
            if (!adj.has(ri1 * n + rj1)) {
                adj.set(ri1 * n + rj1, []);    
            }
            adj.get(ri1 * n + rj1).push([ri2, rj2]);
        }
    }
    for (let j = 0; j < n; j++) {
        const num2index = new Map();
        for (let i = 0; i < m; i++) {
            const num = matrix[i][j];
            num2index.set(num, [i, j]);
        }
        const sortedArray = [...num2index.keys()];
        sortedArray.sort((a, b) => a - b);
        for (let k = 1; k < sortedArray.length; k++) {
            const prev = num2index.get(sortedArray[k - 1]);
            const curr = num2index.get(sortedArray[k]);
            const i1 = prev[0], j1 = prev[1], i2 = curr[0], j2 = curr[1];
            const root1 = uf.find(i1, j1);
            const root2 = uf.find(i2, j2);
            const ri1 = root1[0], rj1 = root1[1], ri2 = root2[0], rj2 = root2[1];
            degree[ri2][rj2]++;
            if (!adj.has(ri1 * n + rj1)) {
                adj.set(ri1 * n + rj1, []);
            }
            adj.get(ri1 * n + rj1).push([ri2, rj2]);
        }
    }

    const rootSet = new Set();
    const ranks = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const rootArr = uf.find(i, j);
            const ri = rootArr[0], rj = rootArr[1];
            rootSet.add(ri * n + rj);
            ranks[ri][rj] = 1;
        }
    }
    const queue = [];
    for (const val of rootSet) {
        if (degree[Math.floor(val / n)][val % n] === 0) {
            queue.push([Math.floor(val / n), val % n]);
        }
    }
    while (queue.length) {
        const arr = queue.shift();
        const i = arr[0], j = arr[1];
        for (const adjArr of (adj.get(i * n + j) || [])) {
            const ui = adjArr[0], uj = adjArr[1];
            degree[ui][uj]--;
            if (degree[ui][uj] === 0) {
                queue.push([ui, uj]);
            }
            ranks[ui][uj] = Math.max(ranks[ui][uj], ranks[i][j] + 1);
        }
    }
    
    const res = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const rootArr = uf.find(i, j);
            const ri = rootArr[0], rj = rootArr[1];
            res[i][j] = ranks[ri][rj];
        }
    }
    return res;
};
class UnionFind {
    constructor(m, n) {
        this.m = m;
        this.n = n;
        this.root = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array(2).fill(0)));
        this.size = new Array(m).fill(0).map(() => new Array(n).fill(0));
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                this.root[i][j][0] = i;
                this.root[i][j][1] = j;
                this.size[i][j] = 1;
            }
        }
    }

    find(i, j) {
        const rootArr = this.root[i][j];
        const ri = rootArr[0], rj = rootArr[1];
        if (ri === i && rj === j) {
            return rootArr;
        }
        return this.find(ri, rj);
    }

    union(i1, j1, i2, j2) {
        const rootArr1 = this.find(i1, j1);
        const rootArr2 = this.find(i2, j2);
        const ri1 = rootArr1[0], rj1 = rootArr1[1];
        const ri2 = rootArr2[0], rj2 = rootArr2[1];
        if (ri1 !== ri2 || rj1 !== rj2) {
            if (this.size[ri1][rj1] >= this.size[ri2][rj2]) {
                this.root[ri2][rj2][0] = ri1;
                this.root[ri2][rj2][1] = rj1;
                this.size[ri1][rj1] += this.size[ri2][rj2];
            } else {
                this.root[ri1][rj1][0] = ri2;
                this.root[ri1][rj1][1] = rj2;
                this.size[ri2][rj2] += this.size[ri1][rj1];
            }
        }
    }
}