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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function dfs(u, v){
        if(!u && !v) return true;
        if((!u && v) || (u && !v) || (u.val!==v.val)) return false;
        return dfs(u.left, v.right) && dfs(u.right, v.left);
    }
    return dfs(root.left, root.right);
};