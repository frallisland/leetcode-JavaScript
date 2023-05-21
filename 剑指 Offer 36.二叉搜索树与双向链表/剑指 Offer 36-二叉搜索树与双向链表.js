var treeToDoublyList = function(root) {
    if(!root) return;
    let pre=null, head=null;
    var dfs=function(cur){
        if(!cur) return;

        dfs(cur.left);
        if(pre!==null){
            pre.right=cur;
            cur.left=pre;
        }else{
            head=cur;
        }
        pre=cur;
        dfs(cur.right);
    }

    dfs(root);
    head.left=pre;
    pre.right=head;
    return head;
};