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
var deleteDuplicates = function(head) {
    let dummy=new ListNode(0, head);
    let pre=dummy, cur=head, set=new Set();
    
    while(cur){
        if(set.has(cur.val)){
            pre.next=cur.next;
        }else{
            pre.next=cur;
            pre=pre.next;
            set.add(cur.val);
        }
        cur=cur.next;
    }
    return dummy.next;
};