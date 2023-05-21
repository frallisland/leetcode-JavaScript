class Solution {
public:
    bool validPartition(vector<int>& nums) {
        int n=nums.size();
        vector<int> check(n, 0);
        
        if(n>=2 && nums[0]==nums[1]) check[1]=1;
        if(n>=3 && ((nums[0]==nums[1] && nums[1]==nums[2]) || (nums[0]+1==nums[1] && nums[1]+1==nums[2]))) check[2]=1;
        for(int i=3; i<n; i++){
            if(check[i-2] && nums[i-1]==nums[i]) check[i]=1;
            if(check[i-3] && ((nums[i-2]==nums[i-1] && nums[i-1]==nums[i]) || (nums[i-2]+1==nums[i-1] && nums[i-1]+1==nums[i]))) check[i]=1;
        }
        return check[n-1]; 
    }
};