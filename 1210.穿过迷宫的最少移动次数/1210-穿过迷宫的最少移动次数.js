var minimumMoves = function(grid) {
    const n = grid.length;
    const dist = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(2).fill(-1)));
    dist[0][0][0] = 0;
    const queue = [[0, 0, 0]];

    while (queue.length) {
        const arr = queue.shift();
        let x = arr[0], y = arr[1], status = arr[2];
        if (status === 0) {
            // �����ƶ�һ����Ԫ��
            if (y + 2 < n && dist[x][y + 1][0] === -1 && grid[x][y + 2] === 0) {
                dist[x][y + 1][0] = dist[x][y][0] + 1;
                queue.push([x, y + 1, 0]);
            }
            // �����ƶ�һ����Ԫ��
            if (x + 1 < n && dist[x + 1][y][0] === -1 && grid[x + 1][y] === 0 && grid[x + 1][y + 1] === 0) {
                dist[x + 1][y][0] = dist[x][y][0] + 1;
                queue.push([x + 1, y, 0]);
            }
            // ˳ʱ����ת 90 ��
            if (x + 1 < n && y + 1 < n && dist[x][y][1] === -1 && grid[x + 1][y] === 0 && grid[x + 1][y + 1] === 0) {
                dist[x][y][1] = dist[x][y][0] + 1;
                queue.push([x, y, 1]);
            }
        } else {
            // �����ƶ�һ����Ԫ��
            if (y + 1 < n && dist[x][y + 1][1] === -1 && grid[x][y + 1] === 0 && grid[x + 1][y + 1] === 0) {
                dist[x][y + 1][1] = dist[x][y][1] + 1;
                queue.push([x, y + 1, 1]);
            }
            // �����ƶ�һ����Ԫ��
            if (x + 2 < n && dist[x + 1][y][1] === -1 && grid[x + 2][y] === 0) {
                dist[x + 1][y][1] = dist[x][y][1] + 1;
                queue.push([x + 1, y, 1]);
            }
            // ��ʱ����ת 90 ��
            if (x + 1 < n && y + 1 < n && dist[x][y][0] === -1 && grid[x][y + 1] === 0 && grid[x + 1][y + 1] === 0) {
                dist[x][y][0] = dist[x][y][1] + 1;
                queue.push([x, y, 0]);
            }
        }
    }

    return dist[n - 1][n - 2][0];
};