class Solution {
public:
    int arithmeticTriplets(vector<int>& nums, int diff) {
        int n=nums.size();
        int ans=0;
        for(int i=0; i<n; i++){
            for(int j=i+1; j<n; j++){
                if(nums[j]-nums[i]!=diff) continue;
                for(int k=j+1; k<n; k++){
                    if(nums[k]-nums[j]!=diff) continue;
                    ans++;
                }
            }
        }
        return ans;
    }
};