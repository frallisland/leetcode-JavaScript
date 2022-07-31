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
    TreeNode* recNode;
    void inorder(TreeNode* root){
        if(root==nullptr){
            return;
        }

        inorder(root->left);
        
        recNode->right=root;
        root->left=nullptr;
        recNode=recNode->right;

        inorder(root->right);

    }

    TreeNode* increasingBST(TreeNode* root) {
        TreeNode* dummy=new TreeNode(-1);
        recNode=dummy;
        inorder(root);
        return dummy->right;
    }
};