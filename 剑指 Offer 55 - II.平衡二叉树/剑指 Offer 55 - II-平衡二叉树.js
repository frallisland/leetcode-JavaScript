var isBalanced = function(root) {
    return getHeight(root)>=0;
};

function getHeight(root){
    if(!root) return 0;
    let lres=getHeight(root.left);
    let rres=getHeight(root.right);
    if(lres===-1 || rres===-1 || Math.abs(lres-rres)>1) return -1;
    return Math.max(lres, rres)+1;
}