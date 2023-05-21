/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function fa(m){
        if(!root) return [];
        let cur=root;
        let ans=[cur];

        while(cur && cur.val!==m){
            if(cur.val>m) cur=cur.left;
            else if(cur.val<m) cur=cur.right;
            ans.push(cur);

            // console.log(next, m, cur);
        }
        return ans;
    }

    let fp=fa(p.val), fq=fa(q.val);
    let ans=null;
    for(let i=0; i<Math.min(fp.length, fq.length); i++){
        if(fp[i]!==fq[i]) break;
        ans=fp[i];
    }
    return ans;
};