class Solution {
public:
    vector<int> smallestTrimmedNumbers(vector<string>& nums, vector<vector<int>>& queries) {
        int n = nums.size(), m = nums[0].size();
        // vecs[i][j] ��ʾ��������� i ���е� j С������Ӧ���±�
        vector<vector<int>> vecs(m + 1);
        for (int i = 0; i < n; i++) vecs[0].push_back(i);
        for (int i = 1; i <= m; i++) {
            vector<vector<int>> B(10);
            // �ѵ� i - 1 �ֵĽ�������� nums �������� i λ�������η���Ͱ��
            for (int x : vecs[i - 1]) B[nums[x][m - i] - '0'].push_back(x);
            // ��ÿ��Ͱ�Ľ��������������Ϊ�� i �ֵĽ��
            for (int j = 0; j < 10; j++) for (int x : B[j]) vecs[i].push_back(x);
        }

        vector<int> ans;
        for (auto &q : queries) ans.push_back(vecs[q[1]][q[0] - 1]);
        return ans;
    }
};