/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    // 年龄越大得分越高
    // 按年龄来排序 1 3 5 10 15
    // 5 5 4 6 从后往前找
    // 5 1 2 3  5 1 3 6
    const n=ages.length;
    
    let idxs=new Array(n).fill(0).map((_, i)=>i);
    idxs.sort((a, b)=>{
        if(ages[a]!==ages[b]) return ages[a]-ages[b];
        return scores[a]-scores[b];
    });

    let preSum=new Array(n).fill(0);
    preSum[0]=scores[idxs[0]];
    
    let ans=preSum[0];
    for(let i=1; i<n; i++){
        preSum[i]=scores[idxs[i]];
        let delta=0;
        for(let j=i-1; j>=0; j--){
            if(scores[idxs[i]]>=scores[idxs[j]]){
                delta=Math.max(delta, preSum[j]);
            }
        }
        preSum[i]+=delta;
        ans=Math.max(ans, preSum[i]);
    }
    return ans;
};