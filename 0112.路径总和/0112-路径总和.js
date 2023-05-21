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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;

    let q=[root];
    while(q.length){
        const n=q.length;
        for(let i=0; i<n; i++){
            let node=q.shift();

            if(node.val===targetSum && !node.left && !node.right) return true;

            if(node.left){
                node.left.val+=node.val;
                q.push(node.left);
            }
            
            if(node.right){
                node.right.val+=node.val;
                q.push(node.right);
            }
        }
    }
    return false;
};