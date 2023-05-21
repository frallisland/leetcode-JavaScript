/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function(n, edges) {
    this._n=n
    this.map=new Array(n).fill(null).map(_=>new Array());
    
    for(let [a, b,c] of edges){
        this.map[a].push([b, c]);
    }
    
};

/** 
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function(edge) {
    let [a, b, c]=edge;
    this.map[a].push([b, c]);
};

/** 
 * @param {number} node1 
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.dij=function(src, dst){
    let dis=new Array(this._n).fill(Number.MAX_VALUE)
    let pq=new MinPriorityQueue({priority:(d)=>d[0]})
    
    dis[src]=0
    pq.enqueue([0, src])
    
    while(pq.size()){
        let [d, i]=pq.dequeue().element
        if(dis[i]<d) continue
        
        for(let [j, c] of this.map[i]){
            let dj=c+d
            if(dj<dis[j]){
                dis[j]=dj
                pq.enqueue([dj, j])
            }
        }
    }
    return dis
}
Graph.prototype.shortestPath = function(node1, node2) {
    let dis=this.dij(node1, node2)
    return dis[node2]===Number.MAX_VALUE?-1:dis[node2]
};

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */