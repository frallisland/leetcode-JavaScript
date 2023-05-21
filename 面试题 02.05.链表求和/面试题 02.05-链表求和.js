/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let preHead=new ListNode(), cur=preHead;
    let carry=0;
    while(l1 && l2){
        let num=carry+l1.val+l2.val;
        l1=l1.next, l2=l2.next;
        cur.next=new ListNode(num%10);
        cur=cur.next;
        carry=Math.floor(num/10);
    }
    while(l1){
        let num=carry+l1.val;
        l1=l1.next;
        cur.next=new ListNode(num%10);
        cur=cur.next;
        carry=Math.floor(num/10);
    }
    while(l2){
        let num=carry+l2.val;
        l2=l2.next;
        cur.next=new ListNode(num%10);
        cur=cur.next;
        carry=Math.floor(num/10);
    }
    if(carry){
        cur.next=new ListNode(carry);
    }
    return preHead.next;
};