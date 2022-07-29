class Solution {
    int ans;
    int depth(TreeNode* rt){
        if (rt == NULL) {
            return 0; // ���ʵ��սڵ��ˣ�����0
        }
        int L = depth(rt->left); // �����Ϊ�������������
        int R = depth(rt->right); // �Ҷ���Ϊ�������������
        ans = max(ans, L + R + 1); // ����d_node��L+R+1 ������ans
        return max(L, R) + 1; // ���ظýڵ�Ϊ�������������
    }
public:
    int diameterOfBinaryTree(TreeNode* root) {
        ans = 1;
        depth(root);
        return ans - 1;
    }
};