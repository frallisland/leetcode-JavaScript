/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
    let st=new Set();

    for(let x of nums) st.add(x);
    let inset=false, cnt=0;
    while(head){
        if(st.has(head.val)){
            if(!inset){
                inset=true;
                cnt++;
            }
        }else{
            inset=false;
        }
        head=head.next;
    }
    return cnt;
};