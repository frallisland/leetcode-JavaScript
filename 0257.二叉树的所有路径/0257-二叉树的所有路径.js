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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths=[];
    function dfs(root, path){
        if(root){
            path+=root.val.toString();
            if(root.left===null && root.right===null){
                paths.push(path);
            }else{
                path+='->';
                dfs(root.left, path);
                dfs(root.right, path);
            }
        }
    }
    dfs(root, '');
    return paths;
};