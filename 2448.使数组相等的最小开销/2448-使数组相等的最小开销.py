class Solution:
    def minCost(self, nums: List[int], cost: List[int]) -> int:
        mps=sorted(zip(nums, cost))
        s, mid=0, sum(cost)//2
        for x, c in mps:
            s+=c
            if s>=mid:
                return sum(abs(y-x)*c for y, c in mps)