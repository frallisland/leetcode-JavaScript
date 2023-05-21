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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
    function find(root, x){
        if(!root) return null;
        let q=[root];

        while(q.length){
            const level=q.length;
            for(let i=0; i<level; i++){
                let node=q.shift();

                if(node.val===x){
                    return node;
                }

                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }
        }
        return null;
    }
    let node=find(root, x);
    let leftTree=0, rightTree=0;
    function dfs(root){
        if(!root) return 0;
        return 1+dfs(root.left)+dfs(root.right);
    }

    leftTree=dfs(node.left), rightTree=dfs(node.right);
    let res=n-leftTree-rightTree-1;
    let half=Math.floor((n+1)/2);
    // console.log(leftTree, rightTree, res);
    if(leftTree>=half || rightTree>=half || res>=half) return true;
    return false;
};