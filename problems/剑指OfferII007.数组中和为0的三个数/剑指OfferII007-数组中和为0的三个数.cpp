class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        int n=nums.size();
        sort(nums.begin(), nums.end());
        vector<vector<int>> ans;
        for(int i=0; i<n; i++){
            if(i>0 && nums[i]==nums[i-1]) continue;
            int l=i+1, r=n-1;
            int c=-nums[i];
            while(l<r){
                int tmp=nums[l]+nums[r];
                if(tmp<c){
                    l++;
                }else if(tmp>c){
                    r--;
                }else{
                    ans.push_back({nums[i], nums[l], nums[r]});
                    while(l<r && nums[l]==nums[++l]);
                    while(l<r && nums[r]==nums[--r]);
                }
            }
        }
        return ans;
    }
};