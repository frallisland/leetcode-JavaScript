/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return null;
    let cur=head, temp=new Node(), preHead=temp, map=new Map();
    while(cur){
        temp.val=cur.val;

        let nxt=cur.next?new Node():null;
        map.set(cur, temp);
        temp.next=nxt;

        temp=temp.next;
        cur=cur.next;
    }
    temp=preHead;
    while(head){
        temp.random=map.get(head.random);
        temp=temp.next;
        head=head.next;
    }
    return preHead;
};