class Solution:
    def makeArrayIncreasing(self, a: List[int], b: List[int]) -> int:
        b.sort()  # Ϊ�ܶ��ֲ��ң��� b ����
        @cache  # ����װ�����������ظ����� dfs �Ľ��
        def dfs(i: int, pre: int) -> int:
            if i < 0: return 0
            res = dfs(i - 1, a[i]) if a[i] < pre else inf  # ���滻 a[i]
            k = bisect_left(b, pre) - 1  # ���ֲ��� b ��С�� pre ����������±�
            if k >= 0:  # a[i] �滻��С�� pre �������
                res = min(res, dfs(i - 1, b[k]) + 1)
            return res
        ans = dfs(len(a) - 1, inf)  # ���� a[n-1] �Ҳ��и���������
        return ans if ans < inf else -1