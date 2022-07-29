class Solution 
{
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& nums) 
    {
        vector<vector<int>> rec;                        //8�ʺ��������õ�  ��бrc_sum  ��бrc_diff
        for (int i = 0; i < nums.size(); i++)           //��������
        {
            for (int j=0; j < nums[i].size(); j++)      //��������
            {
                if (i + j < rec.size())
                    rec[i + j].push_back(nums[i][j]);   //rc_sum��Ϊrec�е�index
                else
                {
                    vector<int> tmp = {nums[i][j]};
                    rec.push_back(tmp);
                }
            }
        }
        vector<int> res;
        for (auto v: rec)
        {
            reverse(v.begin(), v.end());            //rԽС  Խ�ں���Ŷ�  ��תһ��
            res.insert(res.end(), v.begin(), v.end());
        }
        return res;
    }
};