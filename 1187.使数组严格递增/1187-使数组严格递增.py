class Solution:
    def makeArrayIncreasing(self, a: List[int], b: List[int]) -> int:
        b.sort()  # 为能二分查找，对 b 排序
        @cache  # 缓存装饰器，避免重复计算 dfs 的结果
        def dfs(i: int, pre: int) -> int:
            if i < 0: return 0
            res = dfs(i - 1, a[i]) if a[i] < pre else inf  # 不替换 a[i]
            k = bisect_left(b, pre) - 1  # 二分查找 b 中小于 pre 的最大数的下标
            if k >= 0:  # a[i] 替换成小于 pre 的最大数
                res = min(res, dfs(i - 1, b[k]) + 1)
            return res
        ans = dfs(len(a) - 1, inf)  # 假设 a[n-1] 右侧有个无穷大的数
        return ans if ans < inf else -1