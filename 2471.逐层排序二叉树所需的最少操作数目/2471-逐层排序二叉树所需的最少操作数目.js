/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function f(a){
    let map=new Map(), b=[...a];
    b.sort((a, b)=>a-b);
    
    for(let i=0; i<a.length; i++){
        map.set(b[i], i);
    }
    
    let loop=0, visit=new Array(a.length).fill(false);
    for(let i=0; i<a.length; i++){
        if(!visit[i]){
            let j=i;
            while(!visit[j]){
                visit[j]=true;
                j=map.get(a[j]);
            }
            loop++;
        }
    }
    return a.length-loop;
}


var minimumOperations = function(root) {
    if(!root) return 0;
    
    let ans=0, q=[root];
    while(q.length){
        const n=q.length;
        let vals=[];
        for(let i=0; i<n; i++){
            let node=q.shift();
            vals.push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        ans+=f(vals);
    }
    
    return ans;
};