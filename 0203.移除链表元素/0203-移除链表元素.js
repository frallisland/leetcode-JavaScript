/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy=new ListNode(0, head);
    let tail=dummy, cur=head;

    while(cur){
        if(cur.val===val){
            tail.next=cur.next;
        }else{
            tail=tail.next;
        }
        cur=cur.next;
    }
    return dummy.next;
};