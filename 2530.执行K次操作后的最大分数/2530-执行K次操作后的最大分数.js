/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    let pq=new MaxPriorityQueue();

    let ans=0;
    for(let num of nums){
        pq.enqueue(num);
    }

    for(let i=0; i<k; i++){
        let top=pq.front().element;
        pq.dequeue();
        pq.enqueue(Math.ceil(top/3));
        ans+=top;
    }
    return ans;
};