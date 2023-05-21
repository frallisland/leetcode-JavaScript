/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const n=arr.length;
    let visit=new Array(n).fill(0);

    let q=[start];
    visit[start]=1;
    while(q.length){
        let x=q.shift();
        if(!arr[x]) return true;
        if(x-arr[x]>=0 && !visit[x-arr[x]]){
            visit[x-arr[x]]=1;
            q.push(x-arr[x]);
        }
        if(x+arr[x]<n && !visit[x+arr[x]]){
            visit[x+arr[x]]=1;
            q.push(x+arr[x]);
        }
    }
    return false;
};