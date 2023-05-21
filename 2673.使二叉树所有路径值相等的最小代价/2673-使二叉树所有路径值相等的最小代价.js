/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function(n, cost) {
    let ans=0;
    
    function dfs(root){
        // console.log(root);
        if(root>=n) return 0;
        
        let leftSum=dfs(root*2+1);
        let rightSum=dfs(root*2+2);
        
        
        ans+=Math.abs(leftSum-rightSum);
        
        return cost[root]+Math.max(leftSum, rightSum);
    }
    dfs(0);
    return ans;
};