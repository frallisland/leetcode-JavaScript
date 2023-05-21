function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
    let tree:Map<number, Array<number>>=new Map();
    
    for(let i:number=0; i<n; i++){
        if(manager[i]===-1) continue;

        let children:Array<number>=new Array();
        if(tree.has(manager[i])) children=tree.get(manager[i]);

        children.push(i);
        tree.set(manager[i], children);
    }

    let ans:number=0;
    let q:Array<number>=new Array();
    q.push(headID);

    let dp:Array<number>=new Array(n).fill(0);
    dp[headID]=informTime[headID];

    while(q.length){
        let node=q.shift();

        if(!tree.has(node)) continue;    
        for(let child of tree.get(node)){
            q.push(child);
            dp[child]=dp[node]+informTime[child];
            // console.log(node, child, dp[child]);
        }
    }


    for(let i:number=0; i<n; i++){
        if(informTime[i]===0){
            ans=Math.max(ans, dp[i]);
        }
    }
    return ans;
};