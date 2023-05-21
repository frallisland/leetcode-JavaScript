/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function(g, qs) {
    const m=g.length, n=g[0].length;
    let ans=new Array(qs.length).fill(0);
    let cnt=0;
    
    let sqs=[];
    for(let i=0; i<qs.length; i++) sqs.push([qs[i], i]);
    sqs.sort((a, b)=>a[0]-b[0]);

    let minP=new MinPriorityQueue({
        compare:(e1, e2)=>e1[0]-e2[0]
    });
    minP.enqueue([g[0][0], 0, 0]);
    g[0][0]=0;

    for(let [q, qi] of sqs){
        while(minP.size() && minP.front()[0]<q){
            cnt++;
            let [_, x, y]=minP.dequeue();
            for(let [nx, ny] of [[x, y+1], [x+1, y], [x, y-1], [x-1, y]]){
                if(nx>=0 && nx<m && ny>=0 && ny<n && g[nx][ny]){
                    minP.enqueue([g[nx][ny], nx, ny]);
                    g[nx][ny]=0;
                }
            }
        }
        ans[qi]=cnt;
    }
    return ans;
};