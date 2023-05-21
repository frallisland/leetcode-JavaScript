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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let seen=new Map();
    let repeat=new Set();
    const dfs=(node)=>{
        if(!node){
            return "None,";
        }

        let sb='';
        sb+=node.val+',';
        sb+=dfs(node.left);
        sb+=dfs(node.right);
        if(seen.has(sb)){
            repeat.add(seen.get(sb));
        }else{
            seen.set(sb, node);
        }
        return sb;
    }
    dfs(root);
    return [...repeat];
};