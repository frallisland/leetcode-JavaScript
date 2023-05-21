/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    function backtrack(path, n, visit){
        if(path.length===n){
            ans.push([...path]);
            return;
        }

        for(let i=0; i<n; i++){
            if(visit&(1<<i)) continue;
            path.push(nums[i]);
            visit|=(1<<i);
            backtrack(path, n, visit);
            visit^=(1<<i);
            path.pop();
        }
    }
    let ans=[];
    backtrack([], nums.length, 0);
    return ans;
};