/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function generateTree(left, right){
    if(left>right) return [null];

    let allTree=[];
    for(let i=left; i<=right; i++){
        let leftTree=generateTree(left, i-1);
        let rightTree=generateTree(i+1, right);

        for(let l of leftTree){
            for(let r of rightTree){
                let cur=new TreeNode(i);
                cur.left=l;
                cur.right=r;
                allTree.push(cur);
            }
        }
    }
    return allTree;
}
var generateTrees = function(n) {
    if(!n) return [];
    return generateTree(1, n);
};