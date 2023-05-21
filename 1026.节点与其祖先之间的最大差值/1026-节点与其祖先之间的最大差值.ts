/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxAncestorDiff(root: TreeNode | null): number {
    let ans:number=0
    function check(root:TreeNode, pVal:number):number{
        if(!root) return 0
        
        let cur:number=Math.abs(root.val-pVal)

        cur=Math.max(cur, check(root.left, pVal), check(root.right, pVal))
        return cur
    }

    let stack:Array<TreeNode>=new Array()
    stack.push(root)
    while(stack.length){
        let node:TreeNode=stack.shift()
        ans=Math.max(ans, check(node, node.val))
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
    }
    return ans
};