var fractionAddition = function (expression) {
    if (expression[0] < 10) expression = '+' + expression;
    let i = 0, fz = 0, fm = 1;
    while (i < expression.length) {
        let sign = 1, _fz = 0, _fm = 0;
        // ����
        if (expression[i] === '-') sign = -1;
        // �ҳ�����
        while (expression[++i] < 10) _fz = _fz * 10 + +expression[i];
        // �ҳ���ĸ
        while (expression[++i] < 10) _fm = _fm * 10 + +expression[i];
        _fz *= sign;
        if (_fm === fm) {
            fz += _fz;
        } else {
            fz = fz * _fm + _fz * fm;
            fm *= _fm;
        }
        if (fz === 0) fm = 1;
        // ����ӷ�ĸ�����Լ��
        const g = gcd(Math.abs(fz), Math.abs(fm));
        fz /= g, fm /= g;
    }
    return `${fz}/${fm}`;
};

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}