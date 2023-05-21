/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    const n=difficulty.length;
    const idxs=new Array(n).fill(0).map((_, i)=>i);

    // idxs 以difficulty的难度来排序
    idxs.sort((a, b)=>difficulty[a]-difficulty[b]);

    let curMax=0, ans=0, curIdx=0;
    worker.sort((a, b)=>a-b);
    for(let work of worker){
        while(curIdx<idxs.length && difficulty[idxs[curIdx]]<=work){
            curMax=Math.max(curMax, profit[idxs[curIdx]]);
            curIdx++;
        }
        ans+=curMax;
    }
    return ans;
};