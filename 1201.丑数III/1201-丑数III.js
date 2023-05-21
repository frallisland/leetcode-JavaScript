/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
    // �Ƚ���ֵת��Ϊ BigInt ����
    a = BigInt(a), b = BigInt(b), c = BigInt(c), n = BigInt(n);

    // BigInt ����ʹ�� Math �����жϣ������Լ�дһ��
    const min = (a, b, c) => {
        let m = a;
        if (m > b) {
            m = b;
        } 
        if (m > c) {
            m = c;
        }

        return m;
    };
    // ����С������
    const gcd = (a, b) => {
        if (b === 0n) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    };
    // �����Լ��
    const lcm = (a, b) => {
        return a * b / gcd(a, b);
    };
    // ����Ƿ��ǳ���
    const check = (val) => {
        return val % a === 0n || val % b === 0n || val % c === 0n;
    };

    let r = n * min(a, b, c);
    let l = 0n;
    let a_b = lcm(a, b);
    let a_c = lcm(a, c);
    let b_c = lcm(b, c);
    let a_b_c = lcm(a_b, c);

    // ���ֲ��ҳ���
    while (l < r) {
        let mid = l + (r - l) / 2n;
        let count = mid / a + mid / b + mid / c - mid / a_b - mid / b_c - mid / a_c + mid / a_b_c;

        if (count === n) {
        // �� count ���� n ʱ����Ҫ���ж��Ƿ�Ϊ��������Ϊ����BigInt�ĳ�����˵�� 4 / 2 �� 5 / 2 �Ľ������ȵ�
            if (check(mid)) {
                return mid;
            } else {
                r = mid - 1n;
            }
        } if (count < n) {
            l = mid + 1n;
        } else {
            r = mid - 1n;
        }
    }

    return check(l) ? l : -1;
};