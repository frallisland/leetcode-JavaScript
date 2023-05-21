typedef long long ll;
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
int f(vector<int> &A)
{
    //  ����
    vector<int> B(A);
    sort(B.begin(), B.end());
    map<int, int> m;
    int len = (int)A.size();
    for (int i = 0; i < len; i++)
    {
        m[B[i]] = i;    //  ����ÿ��Ԫ������Ӧ��λ�õ�ӳ���ϵ
    }

    int loops = 0;      //  ѭ���ڸ���
    vector<bool> flag(len, false);
    //  �ҳ�ѭ���ڵĸ���
    for (int i = 0; i < len; i++)
    {
        if (!flag[i])
        {
            int j = i;
            while (!flag[j])
            {
                flag[j] = true;
                j = m[A[j]];    //  ԭ������jλ�õ�Ԫ�������������е�λ��
            }
            loops++;
        }
    }
    return len - loops;
}



    int minimumOperations(TreeNode* root) {
        if(!root) return 0;
        
        queue<TreeNode *> q;
        ll ans=0;
        q.push(root);
        while(q.size()){
            int n=q.size();
            vector<int> nums;
            for(int i=0; i<n; i++){
                TreeNode* node=q.front();
                q.pop();
                
                if(node->left) q.push(node->left);
                if(node->right) q.push(node->right);
                
                nums.push_back(node->val);
            }
            ans+=f(nums);
        }
        return ans;
    }
    
};