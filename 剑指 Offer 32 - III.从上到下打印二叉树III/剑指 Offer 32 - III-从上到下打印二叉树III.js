/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let ans=[], q=[root], level=0;
    while(q.length){
        const n=q.length;
        let temp=[];
        for(let i=0; i<n; i++){
            let node=q.shift();
            temp.push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        if(level%2) temp.reverse();
        ans.push(temp);
        level++;
    }
    return ans;
};