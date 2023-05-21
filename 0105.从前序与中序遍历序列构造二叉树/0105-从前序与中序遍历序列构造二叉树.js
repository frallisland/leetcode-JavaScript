/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let map=new Map();
    const n=preorder.length;

    for(let i=0; i<n; i++){
        map.set(inorder[i], i);
    }

    function build(pl, pr, il, ir){
        if(pl>pr) return null;

        let node=new TreeNode(preorder[pl]);
        
        let ni=map.get(preorder[pl]);

        let size=ni-il;
        node.left=build(pl+1, pl+size, il, ni-1);
        node.right=build(pl+size+1, pr, ni+1, ir);
        return node;
    }

    return build(0, n-1, 0, n-1);;
};