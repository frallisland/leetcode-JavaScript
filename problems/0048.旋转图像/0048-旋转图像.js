var rotate = function(matrix) {
    const n = matrix.length;
    // ˮƽ��ת
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
        }
    }
    // ���Խ��߷�ת
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};