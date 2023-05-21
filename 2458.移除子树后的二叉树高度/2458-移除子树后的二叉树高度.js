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
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, qs) {
    const N=100010;
    let hs=new Array(N).fill(0), nodesH=new Array(N).fill(-1), layers=[];
    function dfs(node){
        if(!node) return -1;
        
        let lh=dfs(node.left), rh=dfs(node.right);
        hs[node.val]=Math.max(lh, rh)+1;
        return hs[node.val];
    }
    dfs(root);
    console.log(hs[root.val]);
    
    function bfs(root){
        let q=[root], h=0;
        while(q.length){
            const m=q.length;
            let temp=[];
            for(let i=0; i<m; i++){
                let node=q.shift();
                
                temp.push(node.val);
                nodesH[node.val]=h;
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
            }
            h++;
            layers.push(temp);
        }
    }
    bfs(root);
    console.log(layers);
    
    const m=qs.length, total=hs[root.val];
    let ans=[];
    for(let i=0; i<m; i++){
        let qv=qs[i];
        let ch=nodesH[qv];
        if(layers[ch].length===1){
            ans.push(total-hs[qv]-1);
        }else{
            let tt=hs[qv], second=-1;
            for(let i=0; i<layers[ch].length; i++){
                if(layers[ch][i]!==qv){
                    second=Math.max(second, hs[layers[ch][i]]);
                }
            }
            if(tt>second){
                ans.push(total-hs[qv]+second);
            }else{
                ans.push(total);
            }
        }
    }
    return ans;
};