/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function dfs(l, r){
        if(l>r) return null;

        let idx=Math.floor((l+r)/2);
        let node=new TreeNode(nums[idx]);

        node.left=dfs(l, idx-1);
        node.right=dfs(idx+1, r);
        return node;
    }
    return dfs(0, nums.length-1);
};