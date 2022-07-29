var restoreIpAddresses = function(s) {
    const SEG_COUNT = 4;
    const segments = new Array(SEG_COUNT);
    const ans = [];

    const dfs = (s, segId, segStart) => {
        // ����ҵ��� 4 �� IP ��ַ���ұ��������ַ�������ô����һ�ִ�
        if (segId === SEG_COUNT) {
            if (segStart === s.length) {
                ans.push(segments.join('.'));
            }
            return;
        }

        // �����û���ҵ� 4 �� IP ��ַ���Ѿ����������ַ�������ô��ǰ����
        if (segStart === s.length) {
            return;
        }

        // ���ڲ�����ǰ���㣬�����ǰ����Ϊ 0����ô��һ�� IP ��ַֻ��Ϊ 0
        if (s.charAt(segStart) === '0') {
            segments[segId] = 0;
            dfs(s, segId + 1, segStart + 1);
        }

        // һ�������ö��ÿһ�ֿ����Բ��ݹ�
        let addr = 0;
        for (let segEnd = segStart; segEnd < s.length; ++segEnd) {
            addr = addr * 10 + (s.charAt(segEnd) - '0');
            if (addr > 0 && addr <= 0xFF) {
                segments[segId] = addr;
                dfs(s, segId + 1, segEnd + 1);
            } else {
                break;
            }
        }
    }

    dfs(s, 0, 0);
    return ans;
};