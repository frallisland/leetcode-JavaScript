/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
function same(ra, rb){
    if(!rb) return true;
    if(!ra || ra.val!==rb.val) return false;
    return same(ra.left, rb.left) && same(ra.right, rb.right);
}
var isSubStructure = function(A, B) {
    if(!A || !B) return false;
    return same(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};