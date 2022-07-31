var findMaximumXOR = function(nums) {
    const HIGH_BIT = 30;
    let x = 0;
    for (let k = HIGH_BIT; k >= 0; --k) {
        const seen = new Set();
        // �����е� pre^k(a_j) �����ϣ����
        for (const num of nums) {
            // ���ֻ�뱣�������λ��ʼ���� k ��������λΪֹ�Ĳ���
            // ֻ�轫������ k λ
            seen.add(num >> k);
        }

        // Ŀǰ x ���������λ��ʼ���� k+1 ��������λΪֹ�Ĳ���
        // ���ǽ� x �ĵ� k ��������λ��Ϊ 1����Ϊ x = x*2+1
        const xNext = x * 2 + 1;
        let found = false;
        
        // ö�� i
        for (const num of nums) {
            if (seen.has(xNext ^ (num >> k))) {
                found = true;
                break;
            }
        }

        if (found) {
            x = xNext;
        } else {
            // ���û���ҵ������ʽ�� a_i �� a_j����ô x �ĵ� k ��������λֻ��Ϊ 0
            // ��Ϊ x = x*2
            x = xNext - 1;
        }
    }
    return x; 
};