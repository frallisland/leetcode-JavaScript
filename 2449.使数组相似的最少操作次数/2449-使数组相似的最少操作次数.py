class Solution:
    def makeSimilar(self, nums: List[int], target: List[int]) -> int:
        nums.sort(key=lambda x:(x%2,x))
        target.sort(key = lambda x:(x%2,x))
        return sum(nums[i] - target[i] for i in range(len(nums)) if nums[i] > target[i])//2
