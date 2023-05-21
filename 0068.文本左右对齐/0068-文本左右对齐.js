const fullJustify = (words, maxWidth) => {
    const ans = [];
    let right = 0, n = words.length;
    while (true) {
        const left = right; // ��ǰ�еĵ�һ�������� words ��λ��
        let sumLen = 0; // ͳ����һ�е��ʳ���֮��
        while (right < n && sumLen + words[right].length + right - left <= maxWidth) {
            sumLen += words[right].length;
            right++;
        }

        // ��ǰ�������һ�У���������룬�ҵ���֮��Ӧֻ��һ���ո�����ĩ���ʣ��ո�
        if (right === n) {
            const s = words.slice(left).join(' ');
            ans.push(s + blank(maxWidth - s.length));
            break;
        }
        const numWords = right - left;
        const numSpaces = maxWidth - sumLen;

        // ��ǰ��ֻ��һ�����ʣ��õ�������룬����ĩ���ո�
        if (numWords === 1) {
            ans.push(words[left] + blank(numSpaces));
            continue;
        }
        
        // ��ǰ�в�ֻһ������
        const avgSpaces = Math.floor(numSpaces / (numWords - 1));
        const extraSpaces = numSpaces % (numWords - 1);
        const s1 = words.slice(left, left + extraSpaces + 1).join(blank(avgSpaces + 1)); // ƴ�Ӷ����һ���ո�ĵ���
        const s2 = words.slice(left + extraSpaces + 1, right).join(blank(avgSpaces)); // ƴ�����൥��
        ans.push(s1 + blank(avgSpaces) + s2);
    }
    return ans;
}

const blank = (n) => {
    return new Array(n).fill(' ').join('');
}