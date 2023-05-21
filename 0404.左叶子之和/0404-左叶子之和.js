/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    function isLeaf(node){
        return !node.left && !node.right;
    }
    function dfs(u){
        if(!u) return 0;
        
        let ans=0;
        if(u.left){
            if(isLeaf(u.left)){
                ans+=u.left.val;
            }else{
                ans+=dfs(u.left);
            }
        }
        if(u.right){
            ans+=dfs(u.right)
        }
        return ans;
    }
    return dfs(root);
};