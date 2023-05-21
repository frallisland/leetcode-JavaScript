/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function(stones, k) {
    let n=stones.length;
    if((n-1)%(k-1)) return -1;

    let s=new Array(n+1).fill(0);
    for(let i=0; i<n; i++) s[i+1]=s[i]+stones[i];

    let map=new Map();
    function dfs(i, j){
        if(i==j) return 0;
        let key=i*1001+j*101;
        if(map.has(key)) return map.get(key);

        let res=Number.MAX_VALUE;

        for(let m=i; m<j; m+=k-1){
            res=Math.min(res, dfs(i, m)+dfs(m+1, j));
        }
        if((j-i)%(k-1)==0) res+=s[j+1]-s[i];
        map.set(key, res);
        return res;
    }
    return dfs(0, n-1, 1);
};