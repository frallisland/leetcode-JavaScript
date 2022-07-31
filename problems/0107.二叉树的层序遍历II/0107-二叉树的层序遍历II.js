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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return [];
    let ans=[];
    let q=[root];
    while(q.length){
        let level=[], ln=q.length;
        for(let i=0; i<ln; i++){
            let node=q.shift();
            level.push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        ans.unshift(level);
    }
    return ans;
};