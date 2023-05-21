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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    if(!root) return false;
    let set=new Set(), q=[];

    q.push(root), set.add(root.val);
    while(q.length){
        const l=q.length;
        for(let i=0; i<l; i++){
            let node=q.shift();
            if(node.left){
                if(set.has(k-node.left.val)) return true;
                set.add(node.left.val);
                q.push(node.left);
            }

            if(node.right){
                if(set.has(k-node.right.val)) return true;
                set.add(node.right.val);
                q.push(node.right);
            }
        }
    }
    return false;
};