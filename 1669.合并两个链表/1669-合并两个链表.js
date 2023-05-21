/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let list_tail=list2;
    
    while(list_tail.next){
        list_tail=list_tail.next;
    }
    let dummy=new ListNode(0, list1);
    let cur=dummy, index=0, pre=null, tail=null;
    
    while(cur){
        if(index===a) pre=cur;
        if(index===b) tail=cur.next.next;
        cur=cur.next;
        index++;
    }
    pre.next=list2;
    list_tail.next=tail;
    return list1;
};