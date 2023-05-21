/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

var allPathsSourceTarget = function(g) {
    let ans=[];
    function bfs(cur, tar, path){
        path.push(cur);
        if(cur===tar){
            ans.push([...path]);
            return;
        }
        for(let node of g[cur]){
            bfs(node, tar, path);
            path.pop();
        }
    }
    bfs(0, g.length-1, []);
    return ans;
};