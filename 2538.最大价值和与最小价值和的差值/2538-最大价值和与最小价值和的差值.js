/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @return {number}
 */
var maxOutput = function(n, edges, price) {
    let g=new Array(n).fill(0).map(_=>new Array());
    for(let [x, y] of edges){
        g[x].push(y);
        g[y].push(x);
    }

    let ans=0;
    // 返回 带叶子的最大路径和、不带叶子的最大路径和
    function dfs(x, fa){
        // max1、max2 分别表示带叶子的路径和、不带叶子的路径和
        let max1=price[x], max2=0, p=price[x];
        for(let y of g[x]){
            if(y===fa) continue;
            let [s1, s2]=dfs(y, x);
            ans=Math.max(ans, max1+s2, max2+s1);
            max1=Math.max(max1, s1+p);
            max2=Math.max(max2, s2+p);
        }
        return [max1, max2]
    }
    dfs(0, -1); // 只有一个连通分量
    return ans;
};