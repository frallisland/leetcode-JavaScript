/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    let pq=new MaxPriorityQueue();
    
    for(let gift of gifts){
        pq.enqueue(gift);
    }
    
    let ans=0;
    for(let i=0; i<k; i++){
        let top=pq.front().element;
        pq.dequeue();
        let x=Math.floor(Math.sqrt(top));
        pq.enqueue(x);
    }
    
    while(pq.size()){
        let top=pq.front().element;
        ans+=top;
        pq.dequeue();
    }
    return ans;
};