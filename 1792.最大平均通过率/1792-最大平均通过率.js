/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(c, e) {
    let pq=new MaxPriorityQueue({priority:(e1)=>(e1.tot-e1.pass)/(e1.tot*(e1.tot+1))});
    
    for(let i=0; i<c.length; i++){
        if(c[i][0]===c[i][1]) continue;
        pq.enqueue({id:i, pass:c[i][0], tot:c[i][1]});
    }

    while(e && pq.size()){
        let tc=pq.front().element;
        pq.dequeue();
        e--;
        c[tc.id][0]++, c[tc.id][1]++;
        pq.enqueue({id:tc.id, pass:c[tc.id][0], tot:c[tc.id][1]});
    }

    let ans=0;
    for(let [p, t] of c){
        ans+=p/t;
    }
    return ans/c.length;
};