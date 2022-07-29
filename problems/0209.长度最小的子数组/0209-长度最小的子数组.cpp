class Solution {
public:
    int minSubArrayLen(int s, vector<int>& nums) {
        int n = nums.size();
        int ans = INT_MAX;
        int sum = 0;

        for(int start = 0, end = 0; end<n; end++){
            sum += nums[end];
            while (sum >= s) {
                ans = min(ans, end - start + 1);
                sum -= nums[start];
                start++;
            }
        }
        return ans == INT_MAX ? 0 : ans;
    }
};