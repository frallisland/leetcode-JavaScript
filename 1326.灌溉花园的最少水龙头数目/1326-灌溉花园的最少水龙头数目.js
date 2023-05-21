/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    let intervals=[];
    for(let i=0; i<n+1; i++){
        let start=Math.max(0, i-ranges[i]);
        let end=Math.min(n, i+ranges[i]);
        intervals.push([start, end]);
    }
    intervals.sort((a, b)=>a[0]-b[0]);

    let dp=new Array(n+1).fill(Number.MAX_VALUE);
    dp[0]=0;
    for(let [start, end] of intervals){
        if(dp[start]===Number.MAX_VALUE) return -1;
        for(let i=start; i<=end; i++){
            dp[i]=Math.min(dp[i], dp[start]+1);
        }
    }
    return dp[n];
};