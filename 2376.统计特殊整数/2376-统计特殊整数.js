/**
 * @param {number} n
 * @return {number}
 */

/**
 * @param {number} N
 * @return {number}
 */
var numDupDigitsAtMostN = function(N) {
    let digits = [];
    let N1 = N;
    let total = 0;
    let used = new Array(10).fill(0);
    while(N1 > 0) {
        digits.push(N1 % 10);
        N1 = Math.floor(N1/10);
    }

    let k = digits.length;

    for(let i = k-1; i > 0; i--) { // ��� 1
        total += 9 * A(9, i-1);
    }

    for(let i = k-1; i >= 0; i--) { // ��� 2
        let num = digits[i];
        for(let j = (i === k-1?1:0); j < num; j++) {
            if(used[j] > 0) continue;

            total += A(10-(k-i), i);
        }
        used[num]++;

        if(used[num] > 1) break; // ȥ���� i λ��ǰ���Ѷ����ظ�
        if(i === 0) {
            total++; // ����λ�ö�ȷ������Ȼû���ظ�
        }

    }

    return N - total;

    function A(i, j) {
        return f(i) / f(i-j);
    }

    function f(i) {
        if(i === 1 || i === 0) return 1;
        return i * f(i-1);
    }
};


var countSpecialNumbers = function(n) {
    return n-numDupDigitsAtMostN(n);
};