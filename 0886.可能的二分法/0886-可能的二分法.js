/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    const color=new Array(n+1).fill(0);
    const g=new Array(n+1).fill(0).map(x=>new Array());
    for(let [i, j] of dislikes){
        g[i].push(j);
        g[j].push(i);
    }
    function dfs(curNode, nowColor, color, g){
        color[curNode]=nowColor;
        for(const next of g[curNode]){
            if(color[next]!==0 && color[curNode]===color[next]){
                return false;
            }
            if(color[next]===0 && !dfs(next, 3^nowColor, color, g)){
                return false;
            }
        }
        return true;
    }
    for(let i=1; i<=n; i++){
        if(color[i]===0 && !dfs(i, 1, color, g)){
            return false;
        }
    }
    return true;
};