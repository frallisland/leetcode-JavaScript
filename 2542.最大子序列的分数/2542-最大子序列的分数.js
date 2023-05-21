/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    const n=nums1.length;
    let mps=new Array(n).fill(0).map((_, i)=>[nums1[i], nums2[i]]);
    
    mps.sort((a, b)=>{
        if(a[1]!==b[1]) return a[1]-b[1];
        return a[0]-b[0];
    });
    
    // console.log(mps);
    let res=0, sum=0;
    let pq=new MinPriorityQueue();
    for(let i=n-1; i>=0; i--){
        if(n-i<=k){
            sum+=mps[i][0];
            pq.enqueue(mps[i][0]);
            if(pq.size()===k){
                res=Math.max(res, sum*mps[i][1]);
            }
        }else{
            let tt=pq.front().element;
            if(tt<mps[i][0]){
                pq.dequeue();
                sum-=tt;
                sum+=mps[i][0];
                pq.enqueue(mps[i][0]);
                res=Math.max(res, sum*mps[i][1]);
            }
            // console.log(tt);
        }
    }
    return res;
};