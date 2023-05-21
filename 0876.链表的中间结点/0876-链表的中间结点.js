/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let preHead=new ListNode(0, head);
    let fast=preHead, slow=preHead;
    while(fast){
        if(fast.next && fast.next.next){
            fast=fast.next.next;
        }else{
            fast=null;
        }
        slow=slow.next;
    }
    return slow;
};