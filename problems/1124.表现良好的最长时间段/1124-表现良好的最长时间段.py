class Solution:
    def longestWPI(self, hours: List[int]) -> int:
        n = len(hours)
        # ����8Сʱ��1�� С�ڵ���8Сʱ��-1��
        score = [0] * n
        for i in range(n):
            if hours[i] > 8:
                score[i] = 1
            else:
                score[i] = -1
        # ǰ׺��
        presum = [0] * (n + 1)
        for i in range(1, n + 1):
            presum[i] = presum[i - 1] + score[i - 1]
        ans = 0
        stack = []
        # ˳�����ɵ���ջ��ջ��Ԫ�شӵ�һ��Ԫ�ؿ�ʼ�ϸ񵥵��ݼ������һ��Ԫ�ؿ϶��������е���СԪ������λ��
        for i in range(n + 1):
            if not stack or presum[stack[-1]] > presum[i]:
                stack.append(i)
        # ����ɨ�����飬����󳤶���
        i = n
        while i > ans:
            while stack and presum[stack[-1]] < presum[i]:
                ans = max(ans, i - stack[-1])
                stack.pop()
            i -= 1
        return ans