/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function(stones) {
    const n=stones.length;
    stones.sort((a, b)=>a-b);
    let dif1=stones[n-2]-stones[0]-n+2;
    let dif2=stones[n-1]-stones[1]-n+2;


    let maxMove=Math.max(dif1, dif2);
    if(dif1===0 || dif2===0){
        return [Math.min(2, maxMove), maxMove];
    }
    let max_cnt=0, left=0;
    for(let right=0; right<n; right++){
        while(stones[right]-stones[left]>n){
            left++;
        }
        max_cnt=Math.max(max_cnt, right-left+1);
    }

    return [n-max_cnt, maxMove];
};