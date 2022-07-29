var convert = function(s, numRows) {
    const n = s.length, r = numRows;
    if (r === 1 || r >= n) {
        return s;
    }
    const t = r * 2 - 2;
    const ans = [];
    for (let i = 0; i < r; i++) { // ö�پ������
        for (let j = 0; j < n - i; j += t) { // ö��ÿ�����ڵ���ʼ�±�
            ans.push(s[j + i]); // ��ǰ���ڵĵ�һ���ַ�
            if (0 < i && i < r - 1 && j + t - i < n) {
                ans.push(s[j + t - i]); // ��ǰ���ڵĵڶ����ַ�
            }
        }
    }
    return ans.join('');
};