var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') return '0'
    let len1 = num1.length, len2 = num2.length, res = new Array(len1 + len2).fill(0)
    // ������Ϊ m + n λ��
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            // �Ӹ�λ����ʼ�������
            const mul = num1[i] * num2[j]
            // �˻��ڽ�������ж�Ӧ��λ��
            const p1 = i + j, p2 = i + j + 1
            // �Խ�������ۼ�
            const sum = mul + res[p2]
            res[p1] += Math.floor(sum / 10)
            res[p2] = sum % 10
        }
    }
    if (res[0] === 0) res.shift()
    return res.join("")
};
