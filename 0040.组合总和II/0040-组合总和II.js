/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(cas, t) {
    const n=cas.length, ans=[];
    cas.sort((a,b)=>a-b);
    function backtrack(index, sum, path, pre){
        if(sum===t){
            ans.push([...path]);
            return;
        }
        if(sum>t || index>=n) return;

        backtrack(index+1, sum, path, false);
        if(index===0 || (index>0 && (cas[index-1]!==cas[index] || pre))){
            path.push(cas[index]);
            backtrack(index+1, sum+cas[index], path, true);
            path.pop();
        }
    }
    backtrack(0, 0, [], false);
    return ans;
};