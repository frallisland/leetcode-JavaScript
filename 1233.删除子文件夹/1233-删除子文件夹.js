/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    let root=new Trie();
    for(let i=0; i<folder.length; i++){
        let path=folder[i].split('/');
        let cur=root;
        for(let p of path){
            if(!cur.children.has(p)){
                cur.children.set(p, new Trie());
            }
            cur=cur.children.get(p);
        }
        cur.ref=i;
    }

    let ans=[];
    function dfs(folder, ans, cur){
        if(cur.ref!==-1){
            ans.push(folder[cur.ref]);
            return;
        }
        for(let child of cur.children.values()){
            dfs(folder, ans, child);
        }
    }

    dfs(folder, ans, root);
    return ans;
};

class Trie{
    constructor(){
        this.ref=-1;
        this.children=new Map();
    }
}