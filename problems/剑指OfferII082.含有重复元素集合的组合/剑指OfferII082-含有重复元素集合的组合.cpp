class Solution {
public:
    vector<vector<int>> ans;
    vector<int> rec;

    void backtrack(vector<int>& nums, int cur, int tar, bool pre_flag){
        // ��Ϊÿ��Ԫ�ض�����0
        if(tar==0){
            ans.push_back(rec);
            // return;
        }

        // ���ڡ���֦
        if(cur==nums.size() || tar<nums[cur]){
            return;
        }
        
        // �Ƿ��ܹ�ѡȡ��ǰֵ
        if(cur>0 && nums[cur-1]==nums[cur] && !pre_flag){
            backtrack(nums, cur+1, tar, false);
        }else{
            rec.push_back(nums[cur]);
            backtrack(nums, cur+1, tar-nums[cur], true);
            rec.pop_back();
            backtrack(nums, cur+1, tar, false);
        }
    }
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        sort(candidates.begin(), candidates.end());
        backtrack(candidates, 0, target, false);
        return ans;
    }
};