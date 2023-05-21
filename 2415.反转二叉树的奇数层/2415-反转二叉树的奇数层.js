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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    let q=[root];
    let level=0;

    while(q[0].left){
        const n=q.length;
        for(let i=0; i<n; i++){
            let node=q.shift();
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        

        if(level===0){
            const len=q.length;
            for(let i=0; i<Math.floor(len/2); i++){
                let [x, y]=[q[i], q[len-1-i]];
                [x.val, y.val]=[y.val, x.val];
            }
        }
        level^=1;
    }
    return root;
};