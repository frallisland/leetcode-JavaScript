/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    // 0 �ڵ�
    if(head===null){
        let node=new Node(insertVal, null);
        node.next=node;
        return node;
    }

    // �б��У��б���β
    let cur=head;
    while(true){
        let nxt=cur.next;
        if(cur.val<=nxt.val && insertVal>=cur.val && insertVal<=nxt.val){
            let node=new Node(insertVal, nxt);
            cur.next=node;
            break;
        }else if(cur.val>nxt.val && (insertVal>cur.val || insertVal<nxt.val)){
            let node=new Node(insertVal, nxt);
            cur.next=node;
            break;
        }else if(cur.val===nxt.val && nxt===head){
            let node=new Node(insertVal, nxt);
            cur.next=node;
            break;
        }
        cur=cur.next;
    }
    return head;
};