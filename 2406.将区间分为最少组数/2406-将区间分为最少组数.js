/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intes) {
    const n=intes.length;
    intes.sort((a, b)=>{
        if(a[0]!=b[0]) return a[0]-b[0];
        return a[1]-b[1];
    });
    
    let pq=new MinPriorityQueue();
    for(let i=0; i<n; i++){
        let [st, ed]=intes[i];
        if(pq.isEmpty()){
            pq.enqueue(ed);
            continue;
        }
        
        let mn=pq.front().element;
        if(mn<st){
            pq.dequeue();
            pq.enqueue(ed);
        }else{
            pq.enqueue(ed);
        }
    }
    // console.log('------------');
    let pqa=pq.toArray();
    // console.log(pqa);
    return pqa.length;
};