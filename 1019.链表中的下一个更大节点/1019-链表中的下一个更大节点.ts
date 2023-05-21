/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function nextLargerNodes(head: ListNode | null): number[] {
    const ans:number[]=new Array()
    const stack:Array<number[]>=new Array();

    let cur:ListNode=head
    let idx:number=-1

    while(cur){
        idx++
        ans.push(0)

        let curVal=cur.val
        while(stack.length && curVal>stack[stack.length-1][0]){
            ans[stack[stack.length-1][1]]=curVal
            stack.pop();
        }

        stack.push([curVal, idx])
        cur=cur.next
    }
    return ans;
};