/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(!head) return null;
    let arr=[];
    let tmp=head;
    while(tmp){
        arr.push(tmp.val);
        tmp=tmp.next;
    }
    
    function dfs(l, r){
        if(l>r) return null;

        let mid=Math.floor((l+r)/2);

        let root=new TreeNode(arr[mid]);
        root.left=dfs(l, mid-1);
        root.right=dfs(mid+1, r);
        return root;
    }
    
    return dfs(0, arr.length-1);
};