/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    const n=intervals.length;
    let idxs=new Array(n).fill(0).map((_, i)=>i);
    idxs.sort((a, b)=>intervals[a][0]-intervals[b][0]);

    // console.log(idxs);
    function find(i, end){
        if(end>intervals[idxs[n-1]][0]) return -1;
        
        let l=0, r=n-1;
        while(l<r){
            let mid=Math.floor((l+r)/2);
            if(intervals[idxs[mid]][0]>=end){
                r=mid;
            }else{
                l=mid+1;
            }
        }
        // console.log(i, l, r);
        return idxs[r];
    }
    let ans=new Array(n).fill(0);
    for(let i=0; i<n; i++){
        ans[i]=find(i, intervals[i][1]);
    }
    return ans;
};