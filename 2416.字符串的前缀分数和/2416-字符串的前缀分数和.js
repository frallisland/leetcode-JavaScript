/**
 * @param {string[]} words
 * @return {number[]}
 */
class Node{
    constructor(){
        this.son=new Map();
        this.ids=[];
        this.score=0;
    }
}

var sumPrefixScores = function(words) {
    const n=words.length;
    let root=new Node();
    words.forEach((word, index)=>{
        let cur=root;
        for(let ch of word){
            let child;
            if(cur.son.has(ch)){
                child=cur.son.get(ch);
            }else{
                child=new Node;
                cur.son.set(ch, child);
            }
            cur=child;
            cur.score++;
        }
        cur.ids.push(index);
    });
    let ans=new Array(n).fill(0);

    function dfs(node, sum){
        sum+=node.score;
        for(let i of node.ids){
            ans[i]=sum;
        }
        for(let child of node.son.values()){
            dfs(child, sum);
        }
    }

    dfs(root, 0);
    return ans;
};