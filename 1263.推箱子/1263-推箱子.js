var minPushBox = function(grid) {
    const m = grid.length, n = grid[0].length;
    let sx = -1, sy = -1, bx = -1, by = -1; // ��ҡ����ӵĳ�ʼλ��
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y] === 'S') {
                sx = x;
                sy = y;
            } else if (grid[x][y] === 'B') {
                bx = x;
                by = y;
            }
        }
    }

    const d = [0, -1, 0, 1, 0];

    const dp = new Array(m * n).fill(0).map(() => new Array(m * n).fill(Number.MAX_VALUE));
    let queue = [];
    dp[sx * n + sy][bx * n + by] = 0; // ��ʼ״̬���ƶ�����Ϊ 0
    queue.push([sx * n + sy, bx * n + by]);
    while (queue.length) {
        const queue1 = [];
        while (queue.length) {
            const arr = queue.shift();
            const s1 = arr[0], b1 = arr[1];
            const sx1 = Math.floor(s1 / n), sy1 = s1 % n, bx1 = Math.floor(b1 / n), by1 = b1 % n;
            if (grid[bx1][by1] === 'T') { // �����ѱ��Ƶ�Ŀ�괦
                return dp[s1][b1];
            }
            for (let i = 0; i < 4; i++) { // ������ĸ������ƶ�����һ��״̬
                const sx2 = sx1 + d[i], sy2 = sy1 + d[i + 1], s2 = sx2*n+sy2;
                if (!ok(grid, m, n, sx2, sy2)) { // ���λ�ò��Ϸ�
                    continue;
                }
                if (bx1 === sx2 && by1 === sy2) { // �ƶ�����
                    const bx2 = bx1 + d[i], by2 = by1 + d[i + 1], b2 = bx2*n+by2;
                    if (!ok(grid, m, n, bx2, by2) || dp[s2][b2] <= dp[s1][b1] + 1) { // ����λ�ò��Ϸ� �� ״̬�ѷ���
                        continue;
                    }
                    dp[s2][b2] = dp[s1][b1] + 1;
                    queue1.push([s2, b2]);
                } else {
                    if (dp[s2][b1] <= dp[s1][b1]) { // ״̬�ѷ���
                        continue;
                    }
                    dp[s2][b1] = dp[s1][b1];
                    queue.push([s2, b1]);
                }
            }
        }
        queue = queue1;
    }
    return -1;
}

const ok = (grid, m, n, x, y) => { // ��Խ���Ҳ���ǽ��
    return x >= 0 && x < m && y >= 0 && y < n && grid[x][y] !== '#';
};