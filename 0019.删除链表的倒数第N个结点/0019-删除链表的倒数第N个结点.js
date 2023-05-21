/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let preHead=new ListNode(0, head);
    let slow=fast=preHead;
    for(let i=0; i<n+1; i++){
        fast=fast.next;
    }
    while(fast){
        slow=slow.next;
        fast=fast.next;
    }
    slow.next=slow.next.next;
    return preHead.next;
};