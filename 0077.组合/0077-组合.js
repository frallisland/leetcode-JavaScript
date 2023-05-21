/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans=[];
    function backtrack(index, path, visit){
        if(path.length===k){
            ans.push([...path]);
            return;
        }

        for(let i=index; i<=n; i++){
            if(visit&(1<<i)) continue;
            visit|=(1<<i);
            path.push(i);
            backtrack(i+1, path, visit);
            visit^=(1<<i);
            path.pop();
        }
    }
    backtrack(1, [], 0);
    return ans;
};