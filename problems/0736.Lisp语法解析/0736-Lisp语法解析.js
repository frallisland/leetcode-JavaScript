var evaluate = function(expression) {
    const scope = new Map();
    let start = 0;

    const innerEvaluate = (expression) => {
        if (expression[start] !== '(') { // �Ǳ��ʽ������Ϊ�����������
            if (isLowerCase(expression[start])) {
                const v = parseVar(expression); // ����
                const n = scope.get(v).length;
                return scope.get(v)[n - 1];
            } else { // ����
                return parseInt(expression);
            }
        }
        let ret;
        start++; // �Ƴ�������
        if (expression[start] === 'l') { // "let" ���ʽ
            start += 4; // �Ƴ� "let "
            const vars = [];
            while (true) {
                if (!isLowerCase(expression[start])) {
                    ret = innerEvaluate(expression); // let ���ʽ�����һ�� expr ���ʽ��ֵ
                    break;
                }
                const v = parseVar(expression);
                if (expression[start] === ')') {
                    const n = scope.get(v).length;
                    ret = scope.get(v)[n - 1]; // let ���ʽ�����һ�� expr ���ʽ��ֵ
                    break;
                }
                vars.push(v);
                start++; // �Ƴ��ո�
                const e = innerEvaluate(expression);
                if (!scope.has(v)) {
                    scope.set(v, []);
                }
                scope.get(v).push(e);
                start++; // �Ƴ��ո�
            }
            for (const v of vars) {
                scope.get(v).pop(); // �����ǰ������ı���
            }
        } else if (expression[start] === 'a') { // "add" ���ʽ
            start += 4; // �Ƴ� "add "
            const e1 = innerEvaluate(expression);
            start++; // �Ƴ��ո�
            const e2 = innerEvaluate(expression);
            ret = e1 + e2;
        } else { // "mult" ���ʽ
            start += 5; // �Ƴ� "mult "
            const e1 = innerEvaluate(expression);
            start++; // �Ƴ��ո�
            const e2 = innerEvaluate(expression);
            ret = e1 * e2;
        }
        start++; // �Ƴ�������
        return ret;
    }

    const parseInt = (expression) => { // ��������
        const n = expression.length;
        let ret = 0, sign = 1;
        if (expression[start] === '-') {
            sign = -1;
            start++;
        }
        while (start < n && isDigit(expression[start])) {
            ret = ret * 10 + (expression.charAt(start) - '0');
            start++;
        }
        return sign * ret;
    }

    const parseVar = (expression) => { // ��������
        const n = expression.length;
        let ret = '';
        while (start < n && expression[start] !== ' ' && expression[start] !== ')') {
            ret += expression[start];
            start++;
        }
        return ret;
    }

    return innerEvaluate(expression, start);
};

const isDigit = (ch) => {
    return parseFloat(ch).toString() === "NaN" ? false : true;
}

const isLowerCase = (ch) => {
    return ch >= 'a' && ch <= 'z';
}