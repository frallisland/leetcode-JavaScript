/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function(g) {
    if(g[0][1]>1 && g[1][0]>1) return -1;

    const m=g.length, n=g[0].length;
    let dist=new Array(m).fill(0).map(_=>new Array(n).fill(Infinity));

    let pq=new MinPriorityQueue({priority:(el)=>el[0]});
    dist[0][0]=0;
    pq.enqueue([0,0,0]);

    while(true){
        let [d, x, y]=pq.dequeue().element;
        
        if(x===m-1 && y===n-1) return d;
        
        for(let [nx, ny] of [[x,y+1], [x+1,y], [x,y-1],[x-1,y]]){
            if(nx>=0 && nx<m && ny>=0 && ny<n){
                let nd=Math.max(d+1, g[nx][ny]);
                nd+=(Math.abs(nd-nx-ny)%2);
                if(nd<dist[nx][ny]){
                    pq.enqueue([nd, nx, ny]);
                    dist[nx][ny]=nd;
                }
            }
        }
    }
};