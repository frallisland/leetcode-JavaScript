class Solution:
    def maxHappyGroups(self, m: int, groups: List[int]) -> int:
        cnt = [0] * m
        for x in groups:
            cnt[x % m] += 1

        @cache  # ���仯
        def dfs(left: int, cnt: Tuple[int]) -> int:
            res = 0
            cnt = list(cnt)
            for x, c in enumerate(cnt):  # ö�ٹ˿�
                if c:  # cnt[x] > 0
                    cnt[x] -= 1
                    res = max(res, (left == 0) + dfs((left + x + 1) % m, tuple(cnt)))  # x �� 0 ��ʼ������Ҫ +1
                    cnt[x] += 1
            return res
        return cnt[0] + dfs(0, tuple(cnt[1:]))  # ת�� tuple �����ܼ��仯